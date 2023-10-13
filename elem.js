class ELEM{
    #htmlTartalom
    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#htmlTartalom = this.htmlOsszeallit();
        this.szuloElem.append(this.#htmlTartalom)
        this.kattintas($('.div_class'))

       

        
    }

        htmlOsszeallit(){
            let txt = "<div class='div_class'><p></p></div>";
            return txt;



        }


        kattintas(target){
            target.on("click", function() {
                $('article div p').text("X");
                console.log(ellenorzes)
              }); 
    

        }



    }
export default ELEM;