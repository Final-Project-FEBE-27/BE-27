# DEPLOY

Code ini di deploy pakai repo pribadi : https://github.com/RezieqFadillah/BE-27-final-ni

Link Deploy Repo (cyclic) : https://app.cyclic.sh/#/app/rezieqfadillah-be-27-final-ni/builds/2022-12-02T03:36:57.944Z

URL API : https://blue-cloudy-rattlesnake.cyclic.app/

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
   "token": "String",
   "username": "String",
   "id": "ObjectId (User)"
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
   "password": "String"
}
```
* Response :
```json
{
   "token": "String",
   "username": "String",
   "id": "ObjectId (Admin)"
}
```

### Menampilkan Forum
Request :
* Method : GET
* Endpoint : /admin
* Header :
   * Content-Type : application/json
   * Accept : application/json
   * auth-token : jwt/token
* Response :
```json
{
   "_id": "ObjectId (Forum)",
   "user": {
      "_id": "ObjectId (User)",
      "username": "String"
      },
   "judul": "String",
   "isi": "String",
   "kategori": "String",
   "komentar": [
      "_id": "ObjectId (Komentar)"
   ]
}
```

### Hapus Forum
Request :
* Method : DELETE
* Endpoint : /admin
* Header :
   * Content-Type : application/json
   * Accept : application/json
   * auth-token : jwt/token
* Body :
```json
{
   "id": "ObjectId (Forum)"
}
```
* Response :
```json
{
   "_id": "ObjectId (Forum)",
   "user": {
      "_id": "ObjectId (User)",
      "username": "String"
      },
   "judul": "String",
   "isi": "String",
   "kategori": "String",
   "komentar": [
      "_id": "ObjectId (Komentar)"
   ]
}
```

### Menampilkan User
Request :
* Method : GET
* Endpoint : /admin/user
* Header :
   * Content-Type : application/json
   * Accept : application/json
   * auth-token : jwt/token
* Response :
```json
{
   "id": "ObjectId (User)"
   "username": "String",
   "email": "String",
   "password": "String",
   "dateRegister": "Date"
}
```

### Hapus User
Request :
* Method : DELETE
* Endpoint : /admin/user
* Header :
   * Content-Type : application/json
   * Accept : application/json
   * auth-token : jwt/token
* Body :
```json
{
   "id": "ObjectId (User)"
}
```
* Response :
```json
{
   "email": "String",
   "username": "String",
   "password": "String",
   "dateRegister": "Date"
}
```

### Update User
Request :
* Method : PUT
* Endpoint : /admin/editUser/:id
* Header :
   * Content-Type : application/json
   * Accept : application/json
   * auth-token : jwt/token
* Body :
```json
{
   "email": "String",
   "username": "String",
   "password": "String"
}
```
* Response :
```json
{
   "email": "String",
   "username": "String",
   "password": "String"
}
```
## Forum
### Forum Collection

| Atribut   | Tipe Data     | default   |Deskripsi                     |
| ----------| --------------|-----------|------------------------------|
| judul     | String        |Null       |judul dari forum              |
| isi       | String        |Null       |isi dari forum                |
| kategori  | String        |Null       |atribut unik untuk setiap foum|
| komentar  | ObjectId      |Null       |ambil tabel komentar          |

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
   "user": "ObjectId (User)",
   "judul": "String",
   "isi": "String",
   "kategori": "String"
}
```
* Response :
```json
{
   "user": "ObjectId (User)",
   "judul": "String",
   "isi": "String",
   "kategori": "String"
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
   "_id": "ObjectId (Forum)",
   "user": {
      "_id": "ObjectId (User)",
      "username": "String"
      },
   "judul": "String",
   "isi": "String",
   "kategori": "String",
   "komentar": [
      "_id": "ObjectId (Komentar)"
   ]
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
    "_id": "ObejctId (Forum)",
    "judul": "String",
    "isi": "String",
    "kategori": "String",
    "komentar": [
     {
      "_id": "ObjectId (Komentar)",
      "nama": "ObjectId (User komentar)",
      "komentar": "String",
      "balasan": [
         {
            "nama": "ObjectId (User balasan)",
            "komentar": "String",
            "_id": "ObjectId (Komentar)"
         }
         ]
      }
   ]
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
   "_id": "ObjectId (Forum)",
   "user": {
      "_id": "ObjectId (User)",
      "username": "String"
      },
   "judul": "String",
   "isi": "String",
   "kategori": "String",
   "komentar": [
      "_id": "ObjectId (Komentar)"
   ]
}
```

## Komentar
### Komentar Collection

| Atribut            | Tipe Data     | default   |Deskripsi                              |
| -------------------| --------------|-----------|---------------------------------------|
| nama               | ObjectId      |Null       |menampilkan nama user yang komen       |
| komentar           | String        |Null       |isi komentar                           |
| balasan            | String        |Null       |atribut untuk menyimpan atribut balasan|
| nama (balasan)     | ObjectId      |Null       |menampilkan user yang balas            |
| komentar (balasan) | String        |Null       |isi balasan                            |

### Tambah Komentar
Request :
* Method : POST
* Endpoint : /yourforum/:id
* Header :
    * Content-Type : application/json
    * Accept : application/json
    * auth-token : jwt/token
#### Komentar
* Body :
```json
{
    "nama": "ObjectId (User Komentar)",
    "komentar": "String"
}
```
* Response :
```json
{
   "nama": "ObjectId (User Komentar)",
   "komentar": "String"
}
```
#### Balasan
* Body :
```json
{
    "nama": "ObjectId (User Balasan)",
    "komentar": "String",
    "id_komentar": "ObjectId (komentar)"
}
```
* Response :
```json
{
    "nama": "ObjectId (User Balasan)",
    "komentar": "String",
    "id_komentar": "ObjectId (komentar)"
}
```
