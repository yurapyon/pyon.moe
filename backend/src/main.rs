#[macro_use] extern crate rocket;

#[get("/hi")]
fn hi() -> &'static str {
    "hi from rust"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![hi])
}
