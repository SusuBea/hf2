class ELEM{
    constructor(szuloElem){
        this.szuloElem = szuloElem;

        let txt = this.htmlOsszeallit();
        console.log(txt)
        this.szuloElem.html(txt);  

        
    }

        htmlOsszeallit(){
            let txt = "";

            txt += "<div class='div_class'><p><p></div>"
            return txt;



        }


    }
export default ELEM;