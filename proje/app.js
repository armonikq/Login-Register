
function back(){

    document.getElementById('registrationContainer').style.display = 'none';
    document.getElementById('input').style.display = "block";

}


async function getWaeter() {
    const registrationFormHTML =`
        <div class="container" id="registrationContainer">
        <div class="icons-back">
          <img src="./ascent/back-button.png"  onclick="back()" alt="" width="50px" height="50px">
          </div>
                <h1>Kayıt Ol</h1>
                <div class="input">
              
                    <div class="inp1">
                        <input type="text" placeholder="Adınız Soyadınız">
                    </div>
                    <div class="inp2">
                        <input type="email" placeholder="E-Posta Adresiniz">
                    </div>
                    <div class="inp3">
                        <input type="password" placeholder="Şifre">
                    </div>
                    <div class="inp4">
                        <input type="password" placeholder="Şifreyi Tekrar Girin">
                    </div>
                    <div class="btn1">
                        <button onclick="register()">Kayıt Ol</button>
                    </div>
                </div>
            </div>
  
     `;
    document.getElementById('input').style.display = 'none';

    document.querySelector('.main-container').insertAdjacentHTML('beforeend', registrationFormHTML)
}