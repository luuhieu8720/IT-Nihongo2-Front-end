import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

function PassReset() {
    return (
        <div className="background">
            <div className="frame position-abs">
                <div className="col-6">
                    <Image src="Image/reset.png" alt="Image Text" />
                </div>
                <div className="col-6">
                    <div className="row-cols-6">
                        <label className="easy-to-take text-center fst-normal text-white position-abs">Forgot your password?</label>
                        <p>
                            <span className="create-new-account1 text-center fst-normal text-white position-abs">
                                Enter your email to receive password reset
                            </span>
                        </p>
                    </div>
                    <div className="row-cols-6">
                        <p>
                            <span className="create-new-account2 text-center fst-normal text-white position-abs">
                                instruction 
                            </span>
                        </p>
                    </div>

                    <div className="row-cols-6">
                        <InputText className="input1 text-white position-abs" placeholder="  Enter your email" style={{ top: '150px' }} />
                    </div>
                
                    <div className="row-cols-6">
                        <Button className="button1 position-abs text-white text-enter1">
                            Send a request to your email
                        </Button>
                    </div>
                    <div className="row-cols-6">
                        <Link to="/signin" className="forgot-pass-text2 position-abs text-center">Login  | </Link> 
                        <Link to="/signup" className="forgot-pass-text1 position-abs text-center">Signup </Link>
                    </div>
                    <div className="row-cols-6">
                       
                    </div>
                </div>
            </div>
  </div>
    );
}
export default PassReset;