# Başlangıç

1. Öncelikle çalıştırılan komut; npm create vite@latest foodi-client -- --template react
2. Daha sonra cd foodi-client
3. Son olarak npm install
4. npm run dev ile projeyi çalıştırın
5. npm run build ile projeyi build edin

# Eklentiler

1. npm install -D tailwindcss postcss autoprefixer komutu ile tailwindcss eklentisini yükleyin
2. npx tailwindcss init -p komutu ile tailwindcss.config.js dosyasını oluşturun
3. tailwind.config.js dosyasını oluşturun
4. tailwindcss.config.js dosyasına kodu ekleyin.
5. index.css dosyasını oluşturun ve içerisine aşağıdaki kodları ekleyin

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# React Router Dom

1. npm install react-router-dom localforage match-sorter sort-by komutu ile react-router-dom eklentisini yükleyin
2. router klasörünün altına Router.jsx eklendi.

```
import { createBrowserRouter } from "react-router-dom";
const router= createBrowserRouter([
{
    path:"/",
    element: <div>SELAMLAR</div>,
},
]);

export default router;
```

3. Daha sonra src/index.jsx dosyasına

```
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>

```

eklendi.

# Proje Hakkında

- Proje xx ana kısımdan oluşuyor.

1. src/layout kısmı eklendi.
2. src/layout/Main.jsx içerisine `<nav></nav>` , `<footer></footer>` eklendi.
3. sonra bu kısma `<Outler/>` eklenerek devam edildi.
4. `npm i -D daisyui@latest` ile daisyui eklentisi yapıldı.
5. `npm install react-icons --save` ile react-icons eklentisi yapıldı.
6. Home.jsx dosyası oluşturuldu. Daha sonra Home içerisine Banner ve Categories eklendi. Bu gösterimi yani Home çeriğini göstercek olan kodlar ise Router.jsx içerisinde yapıldı. Böylece Home / gidildiğinde gösterilecekler router içerisinde belirlendi.
7. Home dizinine ayrıca SpecialDishes.jsx dosyası eklendi. Bu dosya içerisinde ise özel yemeklerin gösterimi yapıldı. Daha sonra `npm install react-slick --save` ile react-slick eklentisi yapıldı. `npm install slick-carousel --save` ile include css eklendi.
