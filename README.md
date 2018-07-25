# FE Skill Assessment Test - SASS &amp; BEM
Mockup Sederhana yang berbasis mobile responsive dan berada di domain http://kly.herokuapp.com.

## Hosting ke Heroku

### 1. Beberapa Aplikasi Pendukung Heroku
Sebelum menghosting web statis di [Heroku](https://www.heroku.com) ada beberapa aplikasi pendukung yang harus di install di komputer / laptop anda yaitu :
- Download [Git](https://git-scm.com/downloads) - untuk mengirimkan apps anda ke Heroku
- Download [Heroku Toolbelt](https://toolbelt.heroku.com/) - aplikasi pendukung untuk Heroku

Lakukan pengecekan apakah aplikasi tersebut sudah terpasang dengan cara menggunakan Terminal(Mac Os) atau Command Prompt(Windows):
- **Heroku** - Login dengan akun Heroku anda

<pre>
C:\Users\BreakDesign>heroku login
Enter your Heroku credentials.
Email: user@kly.com
Password: *****************
</pre>

- **Git** - Cek dengan cara --version

<pre>
C:\Users\BreakDesign>git --version
git version 2.18.0.windows.1
</pre>


### 2. Mempunyai Akun Heroku
Untuk menggunakan Hosting Heroku kita memerlukan Akun Heroku, jika belum mempunyai akun bisa Daftar terlebih dahulu di [Heroku Daftar](https://signup.heroku.com/login)

### 3. Konfigurasi File Heroku
Buat file dengan nama `Procfile` tanpa ektensi apapun didalam project anda.File `Procfile` ini berfungsi untuk menjalankan perintah konfigurasi di Heroku seperti mengatur bahasa program apa yang kita gunakan, dan ada beberapa fungsi yang lain.Karena web statis membutuhkan apache untuk menjalankannya maka isi file tersebut script dibawah ini

<pre>
web: vendor/bin/heroku-php-apache2
</pre>

### 4. Inisialisasi Git (Install Git)
Install Git kedalam project anda dengan perintah cmd :

<pre>
C:\xampp\htdocs\feskill>git init
</pre>

Kemudian buat app di akun Heroku dengan perintah cmd :

<pre>
C:\xampp\htdocs\feskill>heroku apps:create nama_app
</pre>

**nama_app** : bisa diganti dan disesuaikan

*(nama_app)* tersebut akan menjadi nama domain dan nama respository di akun Heroku anda 
Nama Domain     : (https://nama_app.herokuapp.com)
Nama Repository : (https://git.heroku.com/nama_app.git

Untuk menambahkan file project Anda ke dalam repository git, ketikkan perintah

<pre>
C:\xampp\htdocs\feskill>git add .
</pre>

Kemudian untuk melakukan pembaruan/perubahan file(commit) , ketikan perintah

<pre>
C:\xampp\htdocs\feskill>git commit -m "Nama Perubahan"
</pre>

*(Nama Perubahan)* bisa dirubah sesuai kebutuhan yang bertujuan memberitau perubahan yang dilakukan.

Langkah terakhir mengupload ke hosting Heroku dengan cara ketikan perintah

<pre>
C:\xampp\htdocs\feskill>git push heroku master
</pre>

## jQuery yang digunakan
Mockup sederhana ini didukung beberapa library jQuery sebagai berikut :

* [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) - Carousel jQuery
* [Infinite Scroll](https://infinite-scroll.com/) - Infinite scrolling jQuery
