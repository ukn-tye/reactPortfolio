import google from "../imgs/icons8-google-96.png";
import linkedIn from "../imgs/icons8-linkedin-96.png";
import github from "../imgs/icons8-github-96.png";

export default function Footer() {
    return (
        <div id="footer" className="flex justify-center items-center p-8">
            <a href="https://github.com/ukn-tye">
                <img src={github} alt="" className="h-12 pr-4 hover:h-14" />
            </a>
            <a href="#p">
                <img src={linkedIn} alt="" className="h-12 pr-4 hover:h-14" />
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
                <img src={google} alt="" className="h-12 hover:h-14" />
            </a>
        </div>
    );
};