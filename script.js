// প্রথমে কিছু ভেরিয়েবল Declare করেছি
let quantity = 1;
let price = 199;
let price2 = 249;
let amountElement = document.getElementById("amount");
let amountNumber = document.getElementById("number");
let amountElement2 = document.getElementById("amount2");
let amountNumber2 = document.getElementById("number2");
let divVisible = false; 


// Packages এর plus(+)/minus(-) button এর জন্য ফাংশান

// Basic Package এর Plus(+) button এর জন্য...

function increaseAmount() {
  if (!divVisible) {
    quantity++;
    updateAmount();
    updateNumber();
  }
}


// Basic Package এর minus(-) button এর জন্য...

function decreaseAmount() {
  if (!divVisible && quantity > 1) {
    quantity--;
    updateAmount();
    updateNumber();
  }
}


// উপরের +/- বাটনের ফাংশানের ভিতর যে updateAmount ফাংশান ব্যবহৃত হয়েছে তা দিয়ে total amount ও quantity পরিবর্তন করা...

function updateAmount() {
  let total = quantity * price;
  amountElement.innerText = "$" + total;
  if (quantity == 1) {
    amountNumber.innerText = quantity + " room";
  }
  else {
    amountNumber.innerText = quantity + " rooms";
  }
}

//-----------------------------------------------------------------------------------

// Pro Package এর Plus(+) button এর জন্য...

function increaseAmount2() {
  if (!divVisible) {
    quantity++;
    updateAmount2();
    updateNumber2();
  }
} 

//Pro Package এর minus(-) button এর জন্য...

function decreaseAmount2() {
  if (!divVisible && quantity > 1) {
    quantity--;
    updateAmount2();
    updateNumber2();
  }
}
        

// উপরের +/- বাটনের ফাংশানের ভিতর যে updateAmount2 ফাংশান ব্যবহৃত হয়েছে তা দিয়ে total amount ও quantity পরিবর্তন করা...

function updateAmount2() {
  let total = quantity * price2;
  amountElement2.innerText = "$" + total;
  if (quantity == 1) {
    amountNumber2.innerText = quantity + " room";
  }
  else {
    amountNumber2.innerText = quantity + " rooms";
  }
}

//---------------------------------------------------------------------------------------
 

// Left side এর sign Up বাটনের জন্য ...

function signUp() {
  if (!divVisible) {
    document.getElementById("signupSuccess").style.display = "block";
    divVisible = true;
  }
}

// +/- বাটনের ফাংশানে যে updateNumber ফাংশান ব্যবহৃত হয়েছে তা দিয়ে id এর মাধ্যমে quantity পরিবর্তন করা...
function updateNumber() {
  let total = quantity * price;
  if (quantity == 1) {
    document.getElementById("signupSuccess").innerText = "Thank you for choosing " + quantity + " room";
  }
  else {
    document.getElementById("signupSuccess").innerText = "Thank you for choosing " + quantity + " rooms";
  }
}




// right side এর sign Up বাটনের জন্য ...

function signUp2() {
  if (!divVisible) {
    document.getElementById("signupSuccess2").style.display = "block";
    divVisible = true;
  }
}


// +/- বাটনের ফাংশানে যে updateNumber2 ফাংশান ব্যবহৃত হয়েছে তা দিয়ে id এর মাধ্যমে quantity পরিবর্তন করা...

function updateNumber2() {
  let total = quantity * price;
  if (quantity == 1) {
    document.getElementById("signupSuccess2").innerText = "Thank you for choosing " + quantity + " room";
  }
  else {
    document.getElementById("signupSuccess2").innerText = "Thank you for choosing " + quantity + " rooms";
  }
}


//---------------------------------------------------------------------------------------------------

//মেনু বারে ক্লিক করলে নির্দিষ্ট ডিভ এ যাওয়ার জন্য...

// Showcase এর জন্য
function scrollToShowcase() {
  document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
}

// Services এর জন্য
function scrollToServices() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Designers এর জন্য
function scrollToDesigners() {
  document.getElementById('designers').scrollIntoView({ behavior: 'smooth' });
}

// Packages এর জন্য
function scrollToPackages() {
  document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
}

// Contact এর জন্য
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Home এর জন্য
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

