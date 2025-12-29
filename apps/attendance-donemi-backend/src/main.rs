use actix_web::{App, HttpResponse, HttpServer, Responder, get, post};

mod data_reader;

#[get("/api/v1")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Attendance Data Reader API is running")
}

#[post("/api/v1/read")]
async fn read_file(body: String) -> impl Responder {
    HttpResponse::Ok().body(format!("Received file content: {}", body))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let server = HttpServer::new(|| App::new().service(hello).service(read_file))
        .bind(("127.0.0.1", 8080))?
        .run();

    println!("\n\tDevolpment server running at http://127.0.0.1:8080/api/v1");

    server.await
}
