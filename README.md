# Redux
## React Redux Project

Merhaba, bu repoda redux çalışacağım ve readme kısmına bazı notlar alacağım.

![reduxSchema](/src/img/reduxSchema.png)

Redux açık kaynak kodlu bir state yönetim kütüphanesidir.

1- Kullanıcı view'de action'ı tetikleyecek işlem yapar.

2- Action Store'da hangi state'in değişeceği bilgisini(type) ve state verisini(payload) taşır.

3- Dispatch gelen action'ı store'da mevcut state ile birlikte reducer'a parametre geçer.

*Reducer: State ve Action'ı parametre alan ve yeni State'i dönen pure bir fonksiyondur. Mutlaka State'in güncel bir kopyası geri dönmelidir. Aksi halde componentler kendini render etmez.* 

4- Bu işlem sırasında State'in ilgili kısmı değişir ve yeni bir state oluşur.

5- State güncellendiğinde abone olan tüm componentler tekrar render edilir.

6- Bu state en sonunda tekrar View'e yansır.

*Reactjs kullanırken tanımladığımız state ile redux kullanırken tanımladığımız state arasındaki tek fark redux state'inin uygulama genelini kapsaması yani global olmasıdır.*

