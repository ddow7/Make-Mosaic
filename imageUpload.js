function makeMosaic(event){
    let reader = new FileReader();
    if(document.getElementById("targetImage")){
        var parent = document.getElementById("image_container");
        var child = document.getElementById("targetImage");
        parent.removeChild(child);

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    }

    reader.onload = function(event){
        let num = 25;
        let img = document.createElement("img");
        img.setAttribute("src",event.target.result);
        img.setAttribute("id","targetImage");
        img.setAttribute("width","500px");
        document.querySelector("div#image_container").appendChild(img);
        img.onload = function(){
            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");
            let width = img.naturalWidth;
            let height = img.naturalHeight;
            canvas.width = 10*num;
            canvas.height = (height/width)*10*num;
            for(let i = 0; i<height; i+=width/num){
                for(let j = 0; j<width; j+=width/num){
                    ctx.drawImage(img,j,i,width/30,width/30,(10*num*j)/width,(10*num*i)/width,num,num);
                }
            }
        }
    };
    reader.readAsDataURL(event.target.files[0]);
}