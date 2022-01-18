import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Category from "../../../components/Category/Category";

export interface Part1PageProps { }

export default function Part1Page(props: Part1PageProps) {

    return (
        <>
            <Category />
            <Header />
            <div className="all-container">
                <div className="container-part1">
                    <div className="image-Next-js">
                        <img className="image-Next-js-logo" src="https://images.viblo.asia/8258af92-2681-460f-b49a-c22de88288da.png" />
                    </div>
                    <div className="content-part1">
                        <div className="title-content-level-1">I. MỞ ĐẦU</div>
                        <div className="title-content-level-2">1. Sơ lược</div>
                        <div className="sub-content">
                            <p>- Sau một thời gian làm việc với <b className="hightlight-text">ReactJS</b> với <b className="hightlight-text">Client Side Rendering (CSR)</b> thì gần đây,
                                mình đang tìm hiểu về việc thực hiện <b className="hightlight-text">Server Side Rendering (SSR)</b> với <b className="hightlight-text">ReactJS</b> cụ thể là với <b className="hightlight-text">NextJS</b>
                                - một framework cho chúng ta thực hiện <b className="hightlight-text">SSR</b> với <b className="hightlight-text">ReactJS</b>.</p>
                        </div>
                        <div className="sub-content">
                            <p>- Kiến thức cần có:<br />
                                &nbsp;•	Hiểu biết cơ bản về Client Side Rendering và Server side rendering<br />
                                &nbsp;•	Có kiến thức cơ bản với ReacJS<br />
                            </p>
                        </div>
                        <div className="title-content-level-2">2. Client Side Rendering và Server side rendering</div>
                        <div className="title-content-level-3">2.1 Server side rendering</div>
                        <div className="title-content-level-4">a. Cơ chế Server side rendering:</div>
                        <div className="sub-content">
                            <p>
                                - Cơ chế <b className="hightlight-text">server-side rendering</b> đã được dùng từ thuở xưa ơi là xưa. Gọi nó là server-side rendering là vì <b className="hightlight-text">phần lớn logic sẽ được xử lý ở server:</b><br />
                                &nbsp;•	Khi người dùng vào một trang web, trình duyệt sẽ gửi GET request tới web server<br />
                                &nbsp;•	Web server sẽ nhận request, đọc dữ liệu từ database.<br />
                                &nbsp;•	Web server sẽ render HTML, trả về cho browser để hiển thị cho người dùng<br />
                            </p>
                            <div style={{ marginLeft: '30%' }}>
                                <img className="img-1" src="https://toidicodedao.files.wordpress.com/2018/07/diagram-serversiderendered.png?w=346&h=248" />
                                <p style={{ color: 'red' }}>Hình ảnh: Mô hình đơn giản về Server Side Rendering</p>
                            </div>
                            <p>
                                - Một số tính chất của cơ chế server side rendering:<br />
                                &nbsp;•	Logic từ đơn giản (validation, đọc dữ liệu) cho đến phức tạp (phân quyền, thanh toán) đều nằm ở phía server<br />
                                &nbsp;•	Logic để routing – chuyển trang nằm ở server<br />
                                &nbsp;•	Logic để render – hiển thị trang web cũng nằm ở server nốt<br />
                            </p>
                        </div>
                        <div className="title-content-level-4">b. Ưu điểm và nhược điểm của Server side rendering:</div>
                        <div className="sub-content">
                            - Ra đời đã lâu, server side rendering đã được sử dụng,<b className="hightlight-text"> cải tiến rất nhiều (Caching, CDN)</b> .<br />
                        </div>
                        <div className="sub-content">
                            <p>
                                <b>Những ưu điểm của cơ chế này:</b><br />
                                &nbsp;•	Initial load nhanh, dễ otpimize, vì toàn bộ dữ liệu đã được xử lý ở server. Client chỉ việc hiển thị.<br />
                                &nbsp;•	Các web framework từ xưa đến nay đều hỗ trợ cơ chế này<br />
                                &nbsp;•	Dễ hiểu và dễ code hơn. Developer chỉ cần code 1 project web là được, không cần phải tách ra front-end và back-end<br />
                                &nbsp;•	SEO tốt vì khi bot của Google, Bing vào web sẽ thấy toàn bộ dữ liệu dưới dạng HTML.<br />
                                &nbsp;•	Chạy được trên phần lớn mọi trình duyệt, kể cả disable JavaScript vẫn chạy tốt<br />
                            </p>
                            <div style={{ marginLeft: '35%' }}>
                                <img className="img-2" src="https://toidicodedao.files.wordpress.com/2018/07/seo-1-500x354.jpg?w=306&h=217" />
                                <p style={{ color: 'red' }}>Hình ảnh: SSR dễ code, hỗ trợ SEO cũng khá tốt</p>
                            </div>
                            <p>
                                <b>Thế nhưng, bên cạnh đó, server side rendering cũng có một số nhược điểm:</b><br />
                                •	Mỗi lần người dùng chuyển trang là site phải load lại nhiều lần, gây khó chịu<br />
                                •	Nặng server vì server phải xử lý nhiều logic và dữ liệu. Có thể sử dụng caching để giảm tải.<br />
                                •	Tốn băng thông vì server phải gửi nhiều dữ liệu thừa và trùng  (HTML, header, footer). Có thể sử dụng CDN để giảm tải.<br />
                                •	Tương tác không tốt như Client Side rendering vì trang phải refresh, load lại nhiều lần.<br />
                                - Cơ chế server side rendering vẫn còn được sử dụng ở rất rất nhiều site. Do vậy, chỉ cần hiểu rõ và nắm vững cơ chế này là bạn đã có thể làm một trang web đầy đủ tính năng rồi.<br />
                                - Các trang web sử dụng cơ chế này:<br />
                                •	Toàn bộ những trang web được build từ CMS như Joomla, WordPress.<br />
                                •	Các trang web bán hàng, web tin tức: Thegioididong, Vnexpress, Zing News<br />
                                •	Các web đọc truyện và forum: Webtretho, vozforum<br />
                            </p>
                            <div style={{ marginLeft: '30%' }}>
                                <img className="img-3" src="https://toidicodedao.files.wordpress.com/2018/03/screen-shot-2018-03-17-at-4-01-52-pm.jpg?w=393&h=203" />
                                <p style={{ color: 'red' }}>Hình ảnh: Các trang web lớn, web tin tức vẫn sử dụng cơ chế SSR</p>
                            </div>
                        </div>
                        <div className="title-content-level-3">2.2 Client side rendering</div>
                        <div className="title-content-level-4">a. Cơ chế Client side rendering:</div>
                        <div className="sub-content">
                            <p>
                                - Ở những năm <b className="hightlight-text">2010</b>, với sự phát triển của <b className="hightlight-text">JavaScript và AJAX</b>, cơ chế <b className="hightlight-text">client-side rendering bắt đầu được sử dụng</b>.<br />
                                - Developer bắt đầu build ứng dụng dưới dạng <b className="hightlight-text">SPA – Single Page Application</b>. Ứng dụng nằm trong 1 page duy nhất nên được gọi là Single Page Application.<br />
                                - <b className="hightlight-text">Client Side Rendering</b> tức là việc render HTML, CSS sẽ <b className="hightlight-text">được thực hiện ở client</b> (Tức JavaScript ở trình duyệt)<br />
                            </p>
                            <div style={{ marginLeft: '30%' }}>
                                <img className="img-3" src="https://toidicodedao.files.wordpress.com/2018/07/sharepoint-2013-clientside-rendering-csr-jslink-templates-10-638.jpg?w=403&h=227" />
                                <p style={{ color: 'red' }}>Hình ảnh: Những logic về render dữ liệu sẽ được xử lý ở phía client thay cho server</p>
                            </div>
                            <p>
                                So với Server Side Rendering (SSR) đã nhắc trong phần 1, Client Side Rendering (CSR) có những đặc điểm sau:<br />
                                •	Những logic đơn giản (validation, đọc dữ liệu, sorting, filtering) nằm ở client side<br />
                                •	Logic để routing (chuyển trang), render (hiển thị) dữ liệu thì 96.69% là nằm ở client side<br />
                                •	Logic phức tạp (thanh toán, phân quyền) hoặc cần xử lý nhiều (data processing, report) <b className="hightlight-text">vẫn nằm ở server side</b>.<br />
                            </p>
                        </div>
                        <div className="title-content-level-4">b. Ưu điểm và nhược điểm của Client side rendering:</div>
                        <div className="sub-content">
                            <p>
                                <b>Ra mắt sau nên Client Side Rendering giải quyết được một số vấn đề của server side rendering:</b><br />
                                •	Page chỉ cần load một lần duy nhất. Khi user chuyển trang hoặc thêm dữ liệu, JavaScript sẽ lấy và gửi dữ liệu từ server qua AJAX. User có thể thấy dữ liệu mới mà <b className="hightlight-text"> không cần chuyển trang</b>.<br />
                                •	Chuyển logic sang client nên <b className="hightlight-text">giảm tải được một phần cho server</b>.<br />
                                •	<b className="hightlight-text">Giảm được băng thông</b> do chỉ cần lấy JSON và dữ liệu cần thiết, thay vì phải lấy toàn bộ trang<br />
                                •	Với các ứng dụng cần tương tác nhiều, SPA <b className="hightlight-text">hoạt động mượt mà hơn</b> vì code chạy trên browser, <b className="hightlight-text">không cần load đi loại lại nhiều</b><br />
                                <b>Tất nhiên là client side rendering cũng có một số nhược điểm riêng:</b><br />
                                •	Initial load sẽ chậm hơn nếu không biết optimize. Lý do là browser phải tải toàn bộ JavaScript về (khá nặng), parse và chạy JS, gọi API để lấy dữ liệu từ server (chậm), sau đó render dữ liệu<br />
                                •	Đòi hỏi project phải chia làm 2 phần riêng là back-end (REST api) và front-end nên khó code hơn<br />
                                •	Không chạy được nếu JavaScript bị disable, hoặc ở các trình duyệt cũ không nhận JavaScript ES6 (Có thể dùng transpiler và polyfill nhưng sẽ làm tăng kích cỡ file js)<br />
                                •	SEO không tốt bằng Server Side Rendering (Do bot crawl không đọc được dữ liệu). Để giải quyết, ta phải kết hợp thêm SSR (Bot mới của Google đọc được client-side rendering rồi).<br />
                                •	Nếu client sử dụng mobile, device yếu thì khi load sẽ bị chậm<br />
                            </p>
                            <div style={{ marginLeft: '30%' }}>
                                <img className="img-3" src="https://toidicodedao.files.wordpress.com/2018/08/frontend-backend-810x389.png?w=397&h=191" />
                                <p style={{ color: 'red' }}>Hình ảnh: Với Client Side Rendering, dự án phải chia ra làm 2 phần là front-end và back-end</p>
                            </div>
                            <p>
                                Vì Client-side rendering rất phù hợp cho những ứng dụng cần tương tác nhiều, hầu hết web của các công ty công nghệ, công ty startup đều đùng cơ chế này:<br />
                                <b>
                                    •	Facebook (React)<br />
                                    •	Instagram (React)<br />
                                    •	Netflix (React)<br />
                                    •	Dropbox (React)<br />
                                    •	AirBnb (React)<br />
                                    •	Trello (Angular)<br />
                                    •	Paypal (Angular + React)<br />
                                    •	Xiaomi (VueJS)<br />
                                    •	Alibabe (VueJS)<br />
                                    •	Gitlab (VueJS)<br />
                                </b>
                                Website của các ông lớn như Airbnb, Facebook, Netflix, Uber đều sử dụng cơ chế Client Side Rendering cả<br />
                                Nói chung, client side rendering còn khá mới mẻ nên vẫn còn một số vấn đề nhỏ chưa được giải quyết tốt (tối ưu tốc độ initial load, giảm kích cỡ file JavaScript của app).<br />
                                Các vấn đề này vẫn đang được giải quyết bởi các engineer trâu bò hàng đầu ở Facebook, Netflix, Instagram…<br />
                                * Đôi khi các website sẽ kết hợp cả server-side rending lẫn client side rendering. Ví dụ server sẽ tải trước một số dữ liệu dưới dạng JSON cho client, hoặc server sẽ render HTML khi gặp bot đễ hỗ trợ crawl tốt hơn.
                                Bản thân các thư viện client-side rendering như React, VueJS cũng đều hỗ trợ server rendering (React có react-dom/server, VueJS có Nuxt).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}