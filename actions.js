"use server"

export default async function SaveApplication(prevState,formData) {
    
    const eduCategory = formData.get("eduCategory")
    const education = formData.get("education")
    console.log(eduCategory);
    console.log(education);
    
    if(!eduCategory){
        return{
            errors:{
                eduCategory: "Bölüm alanı boş olamaz"
            }
        }
    }
    if(!education){
        return{
            errors:{
                education: "Eğitim alanı boş olamaz"
            }
        }
    }
    // if(!eduCategory || !education){
    //     console.log("kaldı");
        
    //     return {
    //         errors: {
    //             eduCategory: "bölüm alanı boş",
    //             education: "eğitim alanı boş"
    //         }
            
            
    //     }   
    // }

    console.log("geçti");
    
    const request = await fetch(
        `https://api.mailgun.net/v3/sandbox8316fc80901543da959eaadb22b69393.mailgun.org/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Basic ' + Buffer.from('<username>:<password>').toString('base64')
          },
          body: form
        }
      );
}