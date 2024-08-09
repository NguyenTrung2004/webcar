const items=document.querySelectorAll(".list-item")
const container=document.querySelector(".list")
const scoll=document.querySelector(".carourcler")
const next=document.querySelector(".next")
const prev=document.querySelector(".prev")
const buttonn=document.querySelectorAll(".btn")
var indexItem=0;
var remove=undefined;
const indexWidth=items[0].offsetWidth;
// ham move di chuyen phan tu theo vi trí index
const move=(index)=>{
     container.style.transform=`translateX(-${index*indexWidth}px)`
     // cap nhat lai index moi cua banner
     indexItem=index
     // mang arrbtn giup loc ra gia tri hien tai cua buc anh
     const arrbtn =[...buttonn].filter(function(value,indexx){
           return indexx==index
     })
     // mang arbtn2 giup loc ra cac gia tri cua mang khong phai la buc ảnh hien tai
      const arrbtn2=[...buttonn].filter(function(value,indexx){
        return indexx!==index
      })
      // kiem tra xem neu nhu mang arrbtn2 co ton tai class active thi remove de 1 trong 3 button duoc active
     arrbtn2.forEach(function(value,i){
         if(value.className.includes("active")){
             value.classList.remove("active")
         }
     })
      // add class active cho button de hien len mau tren button
      arrbtn[0].classList.add("active")
}

// ham strartSlide co tac dung giup cac buc ảnh se tu dong di chuyen sao 5s
function startSlide(){
    // tao 1 bien remove de khi nguoi dung click vao nut next va prev de reset time lai 
    remove=setInterval(function(){
        var index=indexItem+1
        if(index>=items.length){
            index=0
        }
        move(index)
    },5000)
}
// ham reset giup reset time lại
function reset(){
    clearInterval(remove)
    startSlide()
}
startSlide()
prev.onclick=function(){
    move((indexItem+1)% items.length)
    reset()
}
next.onclick=function(){
    move((indexItem-1+items.length)%items.length)
    reset()
}
// su khi khi nguoi dung click vao button de qua slide tiep theo
buttonn.forEach((item,index)=>{
    item.onclick=function(){
        move(index)
        reset()
    }
})
// Chuyen mau xe
// chuyen theo nut
const style_color=document.querySelectorAll(".style-color div")
const itemsImg=document.querySelectorAll(".style-img-item")
const containerImg=document.querySelector(".style-img")
const banner=document.querySelector(".style-img-box")
const nextImg=document.querySelector(".next1")
const prevImg=document.querySelector(".prev1")
const change_photo=document.querySelector(".style-img-item img")
var indexItemImg=0;
const arrImg=[
    "./assets/imgs/red-removebg-preview.png",
    "./assets/imgs/white-removebg-preview.png",
    "./assets/imgs/blue-removebg-preview.png",
    "./assets/imgs/black-removebg-preview (2).png"
]
var remo2=undefined;
//lay khich thuoc tam anh
const indexWidthImg=itemsImg[0].offsetWidth;
const moveImg=(value,index)=>{
    //  containerImg.style.transform=`translateX(-${index*indexWidthImg}px)`
    change_photo.setAttribute("src",value)
    change_photo.classList.add("animion")
    setTimeout(function(){
       change_photo.classList.remove("animion")
    },500)
     indexItemImg=index
}
prevImg.onclick=function(){
    // lay ra vi tri cua tam anh
    var item =(indexItemImg+1) %arrImg.length;
    // lay ra tam ảnh theo vi tri index
    const arrPrev=arrImg.filter(function(value,index){
           return item==index
    })
     moveImg(arrPrev[0],item)
     reset2()
    // moveImg((indexItemImg+1)% itemsImg.length)
}
nextImg.onclick=function(){
    // lay ra vi tri cua tam anh
    var item= (indexItemImg-1+arrImg.length)%arrImg.length;
    // lay ra tam anh theo vi tri index
    const arrPrev=arrImg.filter(function(value,index){
        return item==index
 })
      moveImg(arrPrev[0],item)   
      reset2()
}
// const moveImg2=(index)=>{
//     containerImg.style.transform=`translateX(-${index*indexWidthImg}px)`
//     indexItemImg=index
// }
// su ly khi nguoi dung click vao o mau sac
style_color.forEach(function(value,index){
    // y tuong khi nguoi dung click vao o mau sac lay ra duong dan anh theo attibute duoc luu vao tam anh 
    //
     value.onclick=function(){
        moveImg(value.getAttribute("data-img"),index)
        reset2()
     }
})
// sau 5s tu dong chuyen mau
function startCar(){
     remo2=setInterval(function(){
        let item=(indexItemImg+1) %arrImg.length;
        const arrPrev=arrImg.filter(function(value,index){
           return item==index
    })
     moveImg(arrPrev[0],item)
   },5000)
}
startCar()
function reset2(){
    clearInterval(remo2)
    startCar()
}
// model
const telephone=document.querySelector(".telephone")
const model=document.querySelector(".modelone")
const close=document.querySelector(".close")
// khi nguoi click vao telephone se add class active de hien form dk
telephone.onclick=function(){
    model.classList.add("active")
}
// click vao nut x thi xoa di class active
close.onclick=function(){
    model.classList.remove("active")
}
// xu ly khi nguoi dung click vao lop phu
model.onclick=function(e){
  if(e.target===model){
    model.classList.remove("active")
  }
}
// quiz
// lay ra cau hoi
const title_parameter=document.querySelectorAll(".parameter-quiz")
// lay ra cau tra loi
const parameter_item=document.querySelectorAll(".parameter-item-box")
// lay ra icon
const title_add=document.querySelectorAll(".title-add")
// lap qua cau hoi
title_parameter.forEach(function(item,index){
    // lay ra cac cau hoi khong duoc click
   var arr=[]
   // lay ra cac icon khong duoc click
   var arrr=[]
   item.onclick=function(){
     arr=[...parameter_item].filter(function(number,i){
        return i!==index
    })
    arrr=[...title_add].filter(function(number,key){
        return key!==index
    })
    // lap qua cac cau hoi khong duoc click neu phan tu k duoc click ma ton tai class active 
    // de xoa di class active 
    arr.forEach(function(value){
        if(value.className.includes("active")){
               value.classList.remove("active")
        }          
  })
  // lap qua cac icon khong duoc click kiem tra xem neu icon khong duoc click ma ton tai icon nut dow thi xóa di
  arrr.forEach(function(value,index){
        if(value.className=="fa-solid fa-chevron-down title-add"){
            value.className="fa-solid fa-angle-right title-add"
        }
   })
   // kiem tra xem neu item hien tai duoc click neu ton tai class active thi xoa di va neu k co thi add class actiive va add them icon dow 
     if(item.lastElementChild.className.includes("active")){
        item.lastElementChild.classList.remove("active")
        title_add[index].className="fa-solid fa-angle-right title-add"
     }else{
        item.lastElementChild.classList.add("active")
        title_add[index].className="fa-solid fa-chevron-down title-add"
     }
   }
})
var login=document.querySelector(".header_icon ")
const button=document.querySelector(".button")
button.onclick=function(){
    model.classList.add("active")
}
console.log(login)
login.onclick=function(){
    model.classList.add("active")
}
var login=document.querySelectorAll(".button2")
console.log(login)
login.forEach(
    login.onclick=function(value,index){
        value.onclick=function(){
            model.classList.add("active")
        }
    }
)
var table_img=document.querySelector(".baner_car")
console.log(table_img)
window.addEventListener('scroll', function() {
    var currentScrollPosition = window.pageYOffset;
   if(currentScrollPosition>=300){
       table_img.classList.add("active")
   }
  });
/* click img hien imgfull*/ 
const model2=document.querySelector(".modeltwo")
const modelfullimg=document.querySelector(".modelfull img")
const close2=document.querySelector(".closetwo")
var clickimg=document.querySelectorAll(".click")
close2.onclick=function(){
    model2.classList.remove("active")
}
clickimg.forEach(function(value,item){
    value.onclick=function(){
        let img=value.getAttribute("src")
        modelfullimg.setAttribute("src",img)
        model2.classList.add("active")
    }
});
model2.onclick=function(e){
    if(e.target!=modelfullimg){
      model2.classList.remove("active")
    }
  }
const img_right=document.querySelector(".img-right")
window.addEventListener('scroll', function() {
    var currentScrollPosition2 = window.pageYOffset;
   if(currentScrollPosition2>=1500){
       img_right.classList.add("active")
   }
  });
const banner1=document.querySelector(".banner1")
banner1.onclick=function(){
    model.classList.add("active")
}
//  nav hiden
var isClick=false
const navbar_hiden=document.querySelector(".navbar_hiden")
const naver=document.querySelector(".naver")
const icon=document.querySelector(".naver i")
naver.onclick=function(){
    if(isClick){
        icon.setAttribute("class","fa-solid fa-bars")
        navbar_hiden.classList.remove("active")
        isClick=false
    }else{
        icon.setAttribute("class","fa-solid fa-xmark")
        navbar_hiden.classList.add("active")
        isClick=true
    }
}
const subnav=document.querySelector(".subnav")
subnav.onclick=function(){
    model.classList.add("active")
}