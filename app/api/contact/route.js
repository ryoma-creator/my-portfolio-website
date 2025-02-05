// app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(request) {
    console.log('API route started');
    
    try {
        const body = await request.json();
        
        // トランスポーターの設定
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

        // トランスポーターの検証
        await transporter.verify();
        console.log('Transporter verified');

        // 管理者へのメール送信
        const adminMailResult = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: body.email,
            to: process.env.EMAIL_USER,
            subject: `New Contact from ${body.firstname}`,
            html: `
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #CCF8FF, #EF96C5);
                           padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="color:  #374151; font-size: 32px; margin: 0; font-family: 'Arial', sans-serif;">
                        New Contact Request
                    </h1>
                    <p style="color:  #374151; margin-top: 10px; font-size: 18px;">
                        From Portfolio Website
                    </p>
                </div>
                
                <div style="background: linear-gradient(to bottom, #ffffff, #f8f9fa);
                           padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- 問い合わせ内容 -->
                    <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 30px;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                        <h2 style="color:  #374151; border-bottom: 2px solid #EF96C5; padding-bottom: 10px;">
                            Contact Details
                        </h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; color: #666; width: 150px;">Full Name:</td>
                                <td style="padding: 10px 0; color:  #374151;">
                                    ${body.firstname} ${body.lastname}
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #666;">Email:</td>
                                <td style="padding: 10px 0; color:  #374151;">${body.email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #666;">Phone:</td>
                                <td style="padding: 10px 0; color:  #374151;">${body.phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #666;">Reason:</td>
                                <td style="padding: 10px 0; color:  #374151;">${body.reason || 'Not specified'}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- メッセージ -->
                    <div style="background: white; padding: 20px; border-radius: 10px;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                        <h2 style="color:  #374151; border-bottom: 2px solid #EF96C5; padding-bottom: 10px;">
                            Message
                        </h2>
                        <p style="color:  #374151; line-height: 1.6; white-space: pre-wrap;">
                            ${body.message}
                        </p>
                    </div>
                </div>
            </div>
            `
        });
        console.log('Admin mail sent:', adminMailResult.messageId);

        // 自動返信メール
        const autoReplyResult = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: body.email,
            subject: 'Thank you for reaching out! 🌟',
            html: `
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <!-- ヘッダー -->
                <div style="background: linear-gradient(135deg, #CCF8FF, #EF96C5);
                           padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;
                           position: relative; overflow: hidden;">
                    <h1 style="color:  #374151; font-size: 32px; margin: 0; font-family: 'Arial', sans-serif;">
                        Thank You for Your Message!
                    </h1>
                    <p style="color:  #374151; margin-top: 10px; font-size: 18px;">
                        I've received your inquiry
                    </p>
                </div>
                
                <!-- メインコンテンツ -->
                <div style="background: linear-gradient(to bottom, #ffffff, #f8f9fa);
                           padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- 挨拶文 -->
                    <div style="text-align: left; margin-bottom: 30px;">
                        <p style="color:  #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Dear ${body.firstname},
                        </p>
                        <p style="color:  #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Thank you for reaching out! I've received your message and will get back to you as soon as possible.
                            Usually, I respond within 24-48 hours.
                        </p>
                        ${body.reason === 'job-opportunity' ? `
                        <p style="color:  #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Since you're interested in job opportunities, you might want to schedule a quick video call:
                            <a href="https://calendly.com/ryoma-t-engineer/30min" 
                               style="color: #EF96C5; text-decoration: none; font-weight: bold;">
                                Schedule a 30-min call
                            </a>
                        </p>
                        ` : ''}
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Best regards,<br>
                            Ryoma
                        </p>
                    </div>

                    <!-- 問い合わせ内容の確認 -->
                    <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 30px;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                        <h2 style="color:  #374151; border-bottom: 2px solid #EF96C5; padding-bottom: 10px;">
                            Your Message Details
                        </h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; color: #666; width: 150px;">Name:</td>
                                <td style="padding: 10px 0; color:  #374151;">
                                    ${body.firstname} ${body.lastname}
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #666;">Reason:</td>
                                <td style="padding: 10px 0; color:  #374151;">${body.reason || 'Not specified'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #666;">Message:</td>
                                <td style="padding: 10px 0; color:  #374151;">
                                    ${body.message}
                                </td>
                            </tr>
                        </table>
                    </div>

                    <!-- CTAボタン -->
                    <div style="text-align: center; margin-bottom: 30px;">
                        <a href="https://my-portfolio-website-lake.vercel.app"
                           style="display: inline-block; padding: 12px 30px;
                                  background: linear-gradient(135deg, #CCF8FF, #EF96C5);
                                  color:  #374151; text-decoration: none; border-radius: 25px;
                                  font-weight: bold; margin: 10px;">
                            View My Portfolio
                        </a>
                        <a href="https://calendly.com/ryoma-t-engineer/30min" 
                           style="display: inline-block; padding: 12px 30px;
                                  background: linear-gradient(135deg, #EF96C5, #CCF8FF);
                                  color:  #374151; text-decoration: none; border-radius: 25px;
                                  font-weight: bold; margin: 10px;">
                            Schedule a Call
                        </a>
                    </div>

                    <!-- フッター -->
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px;
                                border-top: 1px solid #eee;">
                        <p style="color: #666; font-size: 12px;">
                            &copy; 2024 Ryoma Taguchi. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            `
        });
        console.log('Auto reply sent:', autoReplyResult.messageId);

        // 成功レスポンスを返す
        return new Response(JSON.stringify({ 
            message: 'Sent successfully',
            adminMailId: adminMailResult.messageId,
            autoReplyId: autoReplyResult.messageId
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });

    } catch (error) {
        // エラーログの出力と詳細なエラーレスポンスの返却
        console.error('Error details:', error);
        return new Response(JSON.stringify({ 
            error: error.message,
            stack: error.stack 
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}