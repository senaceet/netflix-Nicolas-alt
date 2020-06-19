// Acordeón index
const liItem = document.querySelectorAll('li');

liItem.forEach(function(li){
    li.addEventListener('click', function()
    {
        li.children[1].classList.toggle('i--plus--close');
        li.children[2].classList.toggle('p--liItem--open');
    });
});

//Form register email password
let correo = 'asdfafsad@afdasdf.asdf';
let formStep1 = 
`<form id="formRegister" action="">
    <p class="p--Steps">STEP <span class="span--Number">1</span> OF <span class="span--Number">3</span></p>
    <h1 class="h1--Step1">Create a password to start your membership.</h1>
    <p class="p--TextDescription">Just a few more steps and you're done! <br>
        We hate paperwork, too.
    </p>
    <input type="email" id="formEmail"  placeholder="Email" required>
    <input type="password" id="formPassword"  placeholder="Add password">
    <button id="buttonForm" class="button--NetflixContinue" type="submit"> CONTINUE</button>
</form>`;

//Pre chosen plan
let  Step2 = 
`<div id="divStep2" class="div--step2">
    <img src="https://i.ibb.co/gFSQDtm/2020-06-12-09-50.png" alt="Netflix_check_ok">
    <p class="p--Steps">STEP <span class="span--Number">2</span> OF <span class="span--Number">3</span></p>
    <h1>Choose your plan.</h1>
    <ul class="ul--Container">
        <li class="li--PlansItem"><i class='i--check bx bx-check bx-md'></i>No commitments, cancel anytime.</li>
        <li class="li--PlansItem"><i class='i--check bx bx-check bx-md'></i>Everything on Netflix for one low price.</li>
        <li class="li--PlansItem"><i class='i--check bx bx-check bx-md'></i>Unlimited viewing on all your devices.</li>
    </ul>
    <button id="buttonStep2" class="button--SeePlans">SEE THE PLANS</button>
</div>`;

//Table
let tableStep2 =
`<div id="TableSection" class="div--TableSection">
<p class="p--Steps">STEP <span class="span--Number">2</span> OF <span class="span--Number">3</span></p>
<h2 class="h2--TitlePlan">Choose the plan that’s right for you.</h2>
<p class="p--TextDescription">Downgrade or upgrade at any time.</p>

<div class="div--ShapesCost--fixed">
    <div class="div--ShapeCost">Basic</div>
    <div class="div--ShapeCost">Standar</div>
    <div class="div--ShapeCost">Premium</div>
</div>
<table>
    <tr>
        <td><strong>Monthly price</strong></td>
        <td>COP16,900</td>
        <td>COP26,900</td>
        <td>COP38,900</td>
    </tr>
    <tr>
        <td><strong>HD available</strong></td>
        <td><i class='i--Svg i--svgPlus bx bx-plus bx-md'></i></td>
        <td><i class='i--Svg bx bx-check'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
    </tr>
    <tr>
        <td><strong>Ultra HD available</strong></td>
        <td><i class='i--Svg i--svgPlus bx bx-plus bx-md'></i></td>
        <td><i class='i--Svg i--svgPlus bx bx-plus bx-md'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
    </tr>
    <tr>
        <td><strong>Screens you can watch on at the same time</strong></td>
        <td><p>1</p></td>
        <td><p>2</p></td>
        <td><p>4</p></td>
    </tr>
    <tr>
        <td><strong>Watch on your laptop, TV, phone and tablet</strong></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
    </tr>
    <tr>
        <td><strong>Unlimited movies and TV shows</strong></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
    </tr>
    <tr>
        <td><strong>Cancel anytime</strong></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
        <td><i class='i--Svg bx bx-check bx-md'></i></td>
    </tr>
</table>        
<p class="p--SubInfo">HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. <a href="">See Terms of Use</a> for more details.</p>
<button  id="buttonSumitLs" class="button--NetflixContinue2" type="submit"> CONTINUE</button>
</div>`;

//Remove - add Form 
const buttonContinue1 = document.getElementById('buttonContinue1');
const divCartContainer = document.getElementById('divCardContainer');
const divSubContainer = document.getElementById('divCartSubContainer');
const sectionContainer =  document.getElementById('sectionContainer');

buttonContinue1.addEventListener('click', function(){
    divSubContainer.remove();
    divCartContainer.innerHTML += formStep1;

    //Remove Form add pre chose
    const formRegister = document.getElementById('formRegister');
    const buttonForm = document.getElementById('buttonForm');
    
    buttonForm.addEventListener('click', function(){
        const formEmail = document.getElementById('formEmail').value;
        const formPassword = document.getElementById('formPassword').value;
    

        localStorage.setItem('correo', formEmail);
        localStorage.setItem('contrasena', formPassword);
    
        formRegister.remove();
        divCartContainer.innerHTML += Step2;

        //Step 2
        const divStep2 = document.getElementById('divStep2');
        const buttonStep2 = document.getElementById('buttonStep2');    
    
        buttonStep2.addEventListener('click',function(){
            divStep2.remove();
            divCartContainer.remove();
            sectionContainer.innerHTML += tableStep2;

            const  TableSection = document.getElementById('TableSection');
            const buttonSumitLs = document.getElementById('buttonSumitLs');

            buttonSumitLs.addEventListener('click', function(){
                TableSection.remove();
                sectionContainer.innerHTML += payMethod;

                const divPayMethod = document.getElementById('divPayMethod');
                divPayMethod.addEventListener('click', function(){
                    divContainerPay.remove();
                    sectionContainer.innerHTML += codeGift;
                    const aCodeButton = document.getElementById('aCodeButton');
                    aCodeButton.addEventListener('click', function(e){
                        const divContainerCard = document.getElementById('divContainerCard');
                        divContainerCard.remove();
                        e.preventDefault();
                        sectionContainer.innerHTML += NamePerfil;
                        const inputCardPerfilName = document.getElementById('inputCardPerfilName').value;

                        let perfilName = inputCardPerfilName;
                        //Save account on local storage

                        localStorage.setItem('perfilName', perfilName);
                        let a = localStorage.getItem('perfilName');
                        console.log(a);
                        let name = localStorage.getItem('perfilName');

                        const pUsername = document.getElementById('pUsername');

                        pUsername.textContent += name;
                    });
                });
            });
        });//Step 2
    });//Remove Form add pre chose
});





let payMethod= `<div class="div--ContainerPay" id="divContainerPay">
<div class="div--containerMethods--auto"> 
    <div class="div--secure"></div><!--secure image-->
    <p class="p--Steps">STEP <span class="span--Number">3</span> OF <span class="span--Number">3</span></p>
    <h2 class="h2pay">Set up your payment.</h2>
    <p>Your membership starts as soon as you set up payment.</p>
    <p>No commitments. <br>
        Cancel online anytime.</p>
        <span class="span--secure">Secure Server<i class='i--lock bx bxs-lock'></i></span>
        <div class="div--PayMethod"><p>Credit or Debit Card</p>
            <div class="div--visa"></div>
            <div class="div--master"></div>
            <div class="div--expre"></div>
            <div class="div--otr"></div>
            <i class='bx bx-right-arrow'></i>
        </div><!--Card pay method image-->
        <div class="div--PayMethod"><p>Savings/Checking Accounts</p>
            <div class="div--ban"></div>     <i class='bx bx-right-arrow'></i></div>
        <div class="div--PayMethod div--PayMethod--work" id="divPayMethod"><p>Gift Code</p>
         <div class="div--gift"></div>      <i class='bx bx-right-arrow'></i></div>
</div>
</div>`;


let codeGift =
`
<div id="divContainerCard" class="div--giftCart">
<div class="div--auto">
    <p class="p--Steps">STEP <span class="span--Number">3</span> OF <span class="span--Number">3</span></p>
    <h2 class="h2giftCard">Set up your gift code</h2>
    <input class="inputCard" type="text" name="" id="inputCard" placeholder="Gift Card Pin or Code">
    <div class="divCosto">
        <p class="p--costo">asdfa300 <a class="a--LinkCosto" href="">Change</a></p>
    </div>
    <a class="a--SubmitButton" id="aCodeButton" href="">REDEEM GIFT CODE</a>
    <p class="p--Message">This page is protected by Google reCAPTCHA to ensure you're not a bot.  <a href="./ErrorMessage.html">Learn more.</a></p>
</div>
</div>`;


let NamePerfil = `
<div class="div--giftCart">
    <div class="div--auto">
        <h2 class="h2giftCard">Give your profile a name</h2>
        <input class="inputCard" type="text" name="" id="inputCardPerfilName" placeholder="Perfil Name">
        <a class="a--SubmitButton" href="./content.html">CONTINUE</a>
    </div>
</div>`;