import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 1. 管理者への通知メール
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: body.email,
            to: process.env.EMAIL_USER,
            subject: `New Contact from ${body.firstname}`,
            html: `
            <div style="max-width: 600px; margin: 0 ; padding: 20px; background-color: #1c1c22; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <!-- ヘッダーセクション -->
            <div style="background: linear-gradient(135deg, #1c1c22, #2a2a31); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: #00ff99; font-size: 32px; margin: 0; font-family: 'Arial', sans-serif;">FRONTEND DEVELOPER</h1>
              <p style="color: #ffffff; margin-top: 10px; font-size: 18px;">Creative & Professional</p>
            </div>
                
            <!-- メインコンテンツ -->
            <div style="background-color: #27272c; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Dear <span style="color: #00ff99; font-weight: bold;">${body.firstname}</span>,</p>
                                
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thank you for reaching out to me. I have received your inquiry and will get back to you as soon as possible.</p>
                
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">While you wait, I'd like to invite you to explore more about my work and background on my portfolio website.</p>
        
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 0;">Best Regards,</p>
                
              <!-- プロフィールセクション -->
              <div style="margin-top: 40px; padding: 20px; background-color: #1c1c22; border-radius: 10px; box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);">
                <table cellpadding="0" cellspacing="0" style="width: 100%;">
                  <tr>
                    <td style="width: 120px; padding-right: 20px;">
                      <img src="https://drive.google.com/uc?export=view&id=14103ptKFFUVJddnXu7REKRw0bmQkvQK6" alt="Ryoma Taguchi" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
                    </td>
                    <td>
                      <h2 style="margin: 0; color: #ffffff; font-size: 24px;">Ryoma Taguchi</h2>
                      <p style="color: #00ff99; margin: 5px 0; font-family: 'Courier New', monospace; font-size: 20px;">Frontend Developer</p>
                                                
                      <!-- 連絡先情報 -->
                      <div style="margin-top: 15px;">
                        <p style="margin: 5px 0;">
                          <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="Email" style="width: 16px; vertical-align: middle; filter: invert(1);"> 
                          <a href="mailto:${process.env.EMAIL_USER}" style="color: #ffffff; text-decoration: none; margin-left: 5px;">${process.env.EMAIL_USER}</a>
                        </p>
                        <p style="margin: 5px 0;">
                          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width: 16px; vertical-align: middle; filter: invert(1);">
                          <a href="https://github.com/yourusername" style="color: #ffffff; text-decoration: none; margin-left: 5px;">GitHub Profile</a>
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
                
              <!-- CTAボタン -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="https://www.yourportfolio.com" style="display: inline-block; padding: 12px 30px; background-color: #00ff99; color: #1c1c22; text-decoration: none; border-radius: 30px; font-weight: bold; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;">View Portfolio</a>
              </div>
        
              <!-- 問い合わせ内容の確認セクション -->
              <div style="margin: 30px 0; padding: 20px; background-color: #1c1c22; border-radius: 10px;">
                  <h3 style="color: #00ff99; margin: 0 0 20px 0; border-bottom: 2px solid #00ff99; padding-bottom: 10px;">Your Inquiry Details</h3>
                  
                  <div style="display: grid; grid-template-columns: 150px 1fr; gap: 15px;">
                      <!-- 名前 -->
                      <p style="color: #666; margin: 0; font-weight: bold;">Full Name:</p>
                      <p style="color: #fff; margin: 0;">${body.firstname} ${body.lastname}</p>
                      
                      <!-- メール -->
                      <p style="color: #666; margin: 0; font-weight: bold;">Email:</p>
                      <p style="color: #fff; margin: 0;">${body.email}</p>
                      
                      <!-- 電話 -->
                      <p style="color: #666; margin: 0; font-weight: bold;">Phone:</p>
                      <p style="color: #fff; margin: 0;">${body.phone}</p>
                      
                      <!-- お問い合わせ理由 -->
                      <p style="color: #666; margin: 0; font-weight: bold;">Reason:</p>
                      <p style="color: #fff; margin: 0;">${body.reason}</p>
                  </div>
              
                  <!-- メッセージは別枠で表示 -->
                  <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333;">
                      <p style="color: #666; margin: 0 0 10px 0; font-weight: bold;">Message:</p>
                      <p style="color: #fff; margin: 0; line-height: 1.6; padding: 15px; background-color: #27272c; border-radius: 8px;">${body.message}</p>
                  </div>
              </div>
        
              </div>
                
            <!-- フッター -->
            <div style="text-align: center; padding: 20px; color: #ffffff; font-size: 12px;">
              <p style="margin: 0;">&copy; 2024 Ryoma Taguchi. All rights reserved.</p>
            </div>
          </div>
            `
        });

        // 2. 問い合わせ者への自動返信
await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: body.email,
    subject: 'Thank you for your contact',
    html: `
    <div style="max-width: 600px; margin: 0 ; padding: 20px; background-color: #1c1c22; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <!-- ヘッダーセクション -->
    <div style="background: linear-gradient(135deg, #1c1c22, #2a2a31); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
      <h1 style="color: #00ff99; font-size: 32px; margin: 0; font-family: 'Arial', sans-serif;">FRONTEND DEVELOPER</h1>
      <p style="color: #ffffff; margin-top: 10px; font-size: 18px;">Creative & Professional</p>
    </div>
        
    <!-- メインコンテンツ -->
    <div style="background-color: #27272c; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Dear <span style="color: #00ff99; font-weight: bold;">${body.firstname}</span>,</p>
                        
      <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thank you for reaching out to me. I have received your inquiry and will get back to you as soon as possible.</p>
        
      <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">While you wait, I'd like to invite you to explore more about my work and background on my portfolio website.</p>

      <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin-bottom: 0;">Best Regards,</p>
        
      <!-- プロフィールセクション -->
      <div style="margin-top: 40px; padding: 20px; background-color: #1c1c22; border-radius: 10px; box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);">
        <table cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 120px; padding-right: 20px;">
              <img src="https://drive.google.com/uc?export=view&id=14103ptKFFUVJddnXu7REKRw0bmQkvQK6" alt="Ryoma Taguchi" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
            </td>
            <td>
              <h2 style="margin: 0; color: #ffffff; font-size: 24px;">Ryoma Taguchi</h2>
              <p style="color: #00ff99; margin: 5px 0; font-family: 'Courier New', monospace; font-size: 20px;">Frontend Developer</p>
                                        
              <!-- 連絡先情報 -->
              <div style="margin-top: 15px;">
                <p style="margin: 5px 0;">
                  <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="Email" style="width: 16px; vertical-align: middle; filter: invert(1);"> 
                  <a href="mailto:${process.env.EMAIL_USER}" style="color: #ffffff; text-decoration: none; margin-left: 5px;">${process.env.EMAIL_USER}</a>
                </p>
                <p style="margin: 5px 0;">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width: 16px; vertical-align: middle; filter: invert(1);">
                  <a href="https://github.com/yourusername" style="color: #ffffff; text-decoration: none; margin-left: 5px;">GitHub Profile</a>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
        
      <!-- CTAボタン -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://www.yourportfolio.com" style="display: inline-block; padding: 12px 30px; background-color: #00ff99; color: #1c1c22; text-decoration: none; border-radius: 30px; font-weight: bold; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;">View Portfolio</a>
      </div>

      <!-- 問い合わせ内容の確認セクション -->
      <div style="margin: 30px 0; padding: 20px; background-color: #1c1c22; border-radius: 10px;">
          <h3 style="color: #00ff99; margin: 0 0 20px 0; border-bottom: 2px solid #00ff99; padding-bottom: 10px;">Your Inquiry Details</h3>
          
          <div style="display: grid; grid-template-columns: 150px 1fr; gap: 15px;">
              <!-- 名前 -->
              <p style="color: #666; margin: 0; font-weight: bold;">Full Name:</p>
              <p style="color: #fff; margin: 0;">${body.firstname} ${body.lastname}</p>
              
              <!-- メール -->
              <p style="color: #666; margin: 0; font-weight: bold;">Email:</p>
              <p style="color: #fff; margin: 0;">${body.email}</p>
              
              <!-- 電話 -->
              <p style="color: #666; margin: 0; font-weight: bold;">Phone:</p>
              <p style="color: #fff; margin: 0;">${body.phone}</p>
              
              <!-- お問い合わせ理由 -->
              <p style="color: #666; margin: 0; font-weight: bold;">Reason:</p>
              <p style="color: #fff; margin: 0;">${body.reason}</p>
          </div>
      
          <!-- メッセージは別枠で表示 -->
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #666; margin: 0 0 10px 0; font-weight: bold;">Message:</p>
              <p style="color: #fff; margin: 0; line-height: 1.6; padding: 15px; background-color: #27272c; border-radius: 8px;">${body.message}</p>
          </div>
      </div>

      </div>
        
    <!-- フッター -->
    <div style="text-align: center; padding: 20px; color: #ffffff; font-size: 12px;">
      <p style="margin: 0;">&copy; 2024 Ryoma Taguchi. All rights reserved.</p>
    </div>
  </div>
    `
});

        return Response.json({ message: 'Sent successfully' });

    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}


// primary: '#1c1c22',
// accent: {
// DEFAULT: '#00ff99',