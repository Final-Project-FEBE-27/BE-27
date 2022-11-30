# ERD

![ERD](https://user-images.githubusercontent.com/114371403/204695277-726536de-37ea-4a9d-b2eb-50379dbb1a03.png)

# DOKUMENTASI API

## User
### User Collection

| Atribut       | Tipe Data     | default   |Deskripsi                  |
| --------------| --------------|-----------|---------------------------|
| email         | String        |Null       |nama email user            |
| username      | String        |Null       |untuk login dan autentikasi|
| password      | String        |Null       |untuk login dan autentikasi|
| dateRegister  | Date          |Null       |untuk login dan autentikasi|

### Register User
Request :
* Method : POST
* Endpoint : /register
* Header :
    * Content-Type : application/json
    * Accept : application/json
* Body :
```json
{
    "email": "String",
    "username": "String",
    "password": "String",
    "dataRegister": "Date"
}
```
* Response :
```json
{
    "message": "String"
}
```
### Login
Request :
* Method : POST
* Endpoint : /login
* Header : 
  * Content-Type : application/json
  * Accept : application/json
* Body :
```json
{
    "username": "String",
    "password": "String"
}
```
* Respone :
```json
{
    "token": "String"
}
```

## Admin
### User Collection

| Atribut       | Tipe Data     | default   |Deskripsi                  |
| --------------| --------------|-----------|---------------------------|
| username      | String        |Null       |untuk login dan autentikasi|
| password      | String        |Null       |untuk login dan autentikasi|

### Login Admin
Request :
* Method : POST
* Endpoint : /login
* Header :
    * Content-Type : application/json
    * Accept : application/json
* Body :
```json
{
    "username": "String",
    "password": "String",
}
```
* Response :
```json
{
    "token": "String"
}
```

## Forum
### Forum Collection

| Atribut   | Tipe Data     | default   |Deskripsi                     |
| ----------| --------------|-----------|------------------------------|
| judul     | String        |Null       |judul dari forum              |
| isi       | String        |Null       |isi dari forum                |
| kategori  | String        |Null       |atribut unik untuk setiap foum|

### Tambah Forum
Request :
* Method : POST
* Endpoint : /upload
* Header :
    * Content-Type : application/json
    * Accept : application/json
    * auth-token : jwt/token
* Body :
```json
{
    "judul": "String",
    "isi": "String",
    "kategori": "String"
}
```
* Response :
```js
{
  redirect('/dashboard')
}
```

### Menampilkan semua Forum
Request :
* Method : GET
* Endpoint : /dashboard
* Header :
    * Content-Type : application/json
    * Accept : application/json
    * auth-token : jwt/token
- Response :
```json
{
    "_id": "String",
    "judul": "String",
    "isi": "String",
    "kategori": "String",
    "komentar": {
        "type": "ObjectId",
        "ref": "Komentar"
    }   
}
```

### Menampilkan Forum berdasarkan ID
Request :
* Method : GET
* Endpoint : /yourforum/:id
* Header :
    * Content-Type : application/json
    * Accept : application/json
    * auth-token : jwt/token
- Response :
```json
{
    "_id": "String",
    "judul": "String",
    "isi": "String",
    "kategori": "String",
    "komentar": {
        "type": "ObjectId",
        "ref": "Komentar"
    }   
}
```

### Menampilkan Forum berdasarkan Kategori
Request :
* Method : GET
* Endpoint : /kategori/:kategori
* Header :
    * Content-Type : application/json
    * Accept : application/json
    * auth-token : jwt/token
- Response :
```json
{
    "_id": "String",
    "judul": "String",
    "isi": "String",
    "kategori": "String",
    "komentar": {
        "type": "ObjectId",
        "ref": "Komentar"
    }   
}
```

## Komentar
### Komentar Collection

| Atribut   | Tipe Data     | default   |Deskripsi                     |
| ----------| --------------|-----------|------------------------------|
| judul     | String        |Null       |judul dari forum              |
| isi       | String        |Null       |isi dari forum                |
| kategori  | String        |Null       |atribut unik untuk setiap foum|

### Tambah Komentar
Request :
* Method : POST
* Endpoint : /yourforum/:id
* Header :
    * Content-Type : application/json
    * Accept : application/json
    * auth-token : jwt/token
* Body :
```json
{
    "nama": "ObjectId",
    "komentar": "String",
    "balasan": {
      "type": "ObjectId",
      "ref": "User",
      "balasan": "String"
    }   
}
```
* Response :
```js
{
  redirect('/yourforum/:id')
}
```
