import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = req;
  const { subject, message } = body;
  console.log(body);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["umriati21@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contact us!</p>
          <p>New Message submitted</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// export async function POST(req, res) {
//   const { body } = await req.json();
//   const { email, subject, message } = body;
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ["umriati21@gmail.com", email],
//       subject: "Hello world",
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New Message submitted!</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     if (error) {
//       return Response.json({ error });
//     }

//     return Response.json({ data });
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
