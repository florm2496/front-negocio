
class get_date{



            currentDateTime() {
                const current = new Date();
                const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
                //const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
                const dateTime = date;
                
                return dateTime;
            }




}

export default new get_date();
