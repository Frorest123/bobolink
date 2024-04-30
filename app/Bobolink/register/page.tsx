"use client"

interface Data {
  email: string,
  leads: undefined | "wordOfMouth" | "socialMedia" | "advertisement" | "newsletter" | "podcast" | "typedUrlDirectly" | "eventOrConference" | "other",
  otherLead?: string
}

interface Leads {
  "wordOfMouth": boolean,
  "socialMedia": boolean,
  "advertisement": boolean,
  "newsletter": boolean,
  "podcast": boolean,
  "typedUrlDirectly": boolean,
  "eventOrConference": boolean,
  "other": {checked: boolean, value: string | null}
}

//I apologize if anyone is trying to read this. This page is awful. It works though. That's all that matters.

import { Select, Input } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register(){
  //can refactor to array later

  // const leads: any = {}
  // for (let i = 0; i < leadNames.length; i++) {
  //   leads[leadNames[i]] = false;  
  // }
  const [data, setData] = useState<Data>({
    email: '',
    leads: 'wordOfMouth'
    // {
    //   'wordOfMouth': false,
    //   'socialMedia': false,
    //   'advertisement': false,
    //   'newsletter': false,
    //   'podcast': false,
    //   'typedUrlDirectly': false,
    //   'eventOrConference': false,
    //   'other': {checked: false, value: null}
    // }
  }); 

  const router = useRouter();

  const submitData = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/postWaitlist", {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify({data})
    })
    router.push("/Bobolink/success");

     
  } 

  const updateLeads = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //i pray this any type doesn't break anything.
    const newData: any = {...data};
    newData.leads = e.target.value;
    setData(newData);
  }

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({...data, email: e.target.value})
  }


   return(
      <section className="register">
        <div>
          <h1 className="reggie">Registration Form</h1>
          <p className="reggie">Please fill out this form with the required information</p>
        </div>
        <fieldset className="inputfield">
        <form method="post" className="post" onSubmit={e => submitData(e)}>


            <label style={{marginBottom: 24}} htmlFor="email">Enter Your Email: <Input value={data.email} onChange={e => updateEmail(e)}></Input></label>

            <label style={{marginBottom: 36}}htmlFor="leads">Where Did You Hear About Us?
            <Select id="leads" size="md" colorScheme="blackAlpha" value={data.leads} onChange={updateLeads}>
              <option value="wordOfMouth">Word of Mouth</option>
              <option value="socialMedia">Social Media</option>
              <option value="advertisement">Advertisement</option>
              <option value="newsletter">Newsletter</option>
              <option value="podcast">Podcast</option>
              <option value="eventOrConference">Event or Conference</option>
              <option value="other">Other</option>
            </Select>
            </label>

          <button type="submit">Submit</button>
          
        </form>
        </fieldset>
      </section>
   )
}

// function SelectLeads({data, updateLeads, setData}: {data: any, updateLeads: any, setData: any}) {
//   return (
//     <>
//     <label htmlFor="leads"> Where did you hear about us? </label>
//     <ul id="leads">
      
//         <div className="checkboxLabel">Word Of Mouth: <input type='checkbox' checked={data.leads.wordOfMouth} onChange={e => {updateLeads(e, 'wordOfMouth')}}/></div>
//         <div className="checkboxLabel">Social Media: <input type='checkbox' checked={data.leads.socialMediah} onChange={e => {updateLeads(e, 'socialMedia')}}/></div>
//         <div className="checkboxLabel">Advertisements: <input type='checkbox' checked={data.leads.advertisement} onChange={e => {updateLeads(e, 'advertisement')}}/></div>
//         <div className="checkboxLabel">Newsletter: <input type='checkbox' checked={data.leads.newsletter} onChange={e => {updateLeads(e, 'newsletter')}}/></div>
//         <div className="checkboxLabel">Podcast: <input type='checkbox' checked={data.leads.podcast} onChange={e => {updateLeads(e, 'podcast')}}/></div>
//         <div className="checkboxLabel">Event or Conference: <input type='checkbox' checked={data.leads.eventOrConference} onChange={e => {updateLeads(e, 'eventOrConference')}}/></div>
//         <OtherCheckbox data={data} updateLeads={updateLeads} setData={setData}/>
        

//     </ul>
//     </>
//   )
// }

// function OtherCheckbox({data, updateLeads, setData}: {data: any, updateLeads: any, setData: any}) {

//   const updateOtherLeadsCheck = () => {
    
//     const newData: Data = {...data}
//     if (!newData.leads.other.checked) {
//       newData.leads.other.checked = true;
//       newData.leads.other.value = "";
//     } else {
//     newData.leads.other.checked = false;
//     newData.leads.other.value = null;
//     }
//     setData(newData);
    
    

//   }

//   const updateOtherLeadsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newData: Data = {...data};
//     newData.leads.other.value = e.target.value;
//     setData(newData);
//   }

//   return (
//     <div className="checkboxLabel">
//       Other: <input type='checkbox' checked={data.leads.other.checked} onChange={updateOtherLeadsCheck}/> {data.leads.other.checked && (<input type="text" className="otherInput" value={data.leads.other.value} onChange={updateOtherLeadsValue}/>)}
//     </div>
//   )
// }