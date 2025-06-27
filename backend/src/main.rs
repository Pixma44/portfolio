use axum::{
    extract::State,
    http::{header, Method, StatusCode},
    response::Json,
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tokio::sync::Mutex;
use tower_http::cors::{Any, CorsLayer};
use tracing_subscriber;

#[derive(Debug, Clone)]
pub struct AppState {
    messages: Arc<Mutex<Vec<ContactMessage>>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ContactMessage {
    pub id: String,
    pub name: String,
    pub email: String,
    pub subject: String,
    pub message: String,
    pub timestamp: String,
}

#[derive(Deserialize)]
pub struct ContactRequest {
    name: String,
    email: String,
    subject: String,
    message: String,
}

#[derive(Serialize)]
pub struct ContactResponse {
    success: bool,
    message: String,
    id: String,
}

async fn health_check() -> &'static str {
    "Portfolio API is running!"
}

async fn submit_contact(
    State(state): State<AppState>,
    Json(payload): Json<ContactRequest>,
) -> Result<Json<ContactResponse>, StatusCode> {
    let id = uuid::Uuid::new_v4().to_string();
    let timestamp = chrono::Utc::now().to_rfc3339();
    
    let contact_message = ContactMessage {
        id: id.clone(),
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        timestamp,
    };

    let mut messages = state.messages.lock().await;
    messages.push(contact_message);

    tracing::info!("New contact message received with ID: {}", id);

    Ok(Json(ContactResponse {
        success: true,
        message: "Message envoyé avec succès!".to_string(),
        id,
    }))
}

async fn get_messages(State(state): State<AppState>) -> Json<Vec<ContactMessage>> {
    let messages = state.messages.lock().await;
    Json(messages.clone())
}

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let state = AppState {
        messages: Arc::new(Mutex::new(Vec::new())),
    };

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods([Method::GET, Method::POST])
        .allow_headers([header::CONTENT_TYPE]);

    let app = Router::new()
        .route("/", get(health_check))
        .route("/api/health", get(health_check))
        .route("/api/contact", post(submit_contact))
        .route("/api/messages", get(get_messages))
        .layer(cors)
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3001")
        .await
        .unwrap();

    tracing::info!("Portfolio backend listening on http://127.0.0.1:3001");

    axum::serve(listener, app).await.unwrap();
}