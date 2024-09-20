import { EmailMessage } from "cloudflare:email";
//import { createMimeMessage } from "mimetext";

export async function onRequestPost(context) {
    try {
      let input = await context.request.formData();
      let pretty = JSON.stringify([...input], null, 2);
      
      /*return new Response(pretty, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });*/

    /*const msg = createMimeMessage();
        msg.setSender({ name: "GPT-4", addr: "contact@cinematicimpact.com" });
        msg.setRecipient("tal@talazar.net");
        msg.setSubject("An email generated in a worker");
        msg.addMessage({
        contentType: 'text/plain',
        data: pretty
   });*/

   var message = new EmailMessage(
    "contact@cinematicimpact.com",
    "tal@talazar.net"
    //msg.asRaw()
  );
  try {
        await env.SEB.send(message);
  } catch (e) {
        return new Response(e.message);
  }

  return new Response("Hello Send Email World!");

    } catch (err) {
      return new Response("Error parsing JSON content", { status: 400 });
    }
  }