function buttonSubmit(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('select').value
    let message = document.getElementById('message').value

    if (!name){
        return alert('Nama tidak boleh kosong')
    }else if (!email){
        return alert('Email tidak boleh kosong')
    }else if (!phone){
        return alert('Telephone tidak boleh kosong')
    }else if (!subject){
        return alert('Pilih salah satu instansi')
    }else if (!message){
        return alert ('Berikan keterangan')
    }else{
        alert('Data sudah dilengkapi')
    }
    
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let receiveMail = 'tarawantara17@gmail.com'
    let a = document.createElement('a')
    
    a.href = `mailto:${receiveMail}?subject=${subject}&body=Halo nama saya ${name} ${message} , silahkan hubungi ${phone}, Email: ${email}`
    a.click()

}



