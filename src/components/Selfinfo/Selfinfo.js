import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Selfinfo.css';

const Selfinfo = () => {
    return (
        <div className='self-info'>
            <div className='info'>
                <div className='personal'>
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--xqQ332cg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ltnifh5z7pkeeb2jzt5p.png" alt="" />
                    <div>
                        <h4>Mirza Adnan</h4>
                        <div className='address'>
                            <FontAwesomeIcon className='icon2' icon={faLocationDot}></FontAwesomeIcon>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='info-first'>
                        <p>90 <small>kg</small></p>
                        <p>5'5"</p>
                        <p>24 <small>yrs</small></p>
                    </div>
                    <div className='info-second'>
                        <p>Weight</p>
                        <p>Height</p>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selfinfo;