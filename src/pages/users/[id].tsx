/* eslint-disable @next/next/no-img-element */
import React from 'react';
import UserComponent from '@/components/UserComponent';
import Link from 'next/link';
import axios from 'axios';

const SingleUser = ({userResponse: userResponse}:any)=>{
    

    return (
        <UserComponent>
            <p><Link className='link-color' href={'/users'}><img className='img-fluid pe-2' src="/images/icons/back.svg" alt="" /> Back to Users</Link></p>
            <div className="d-flex flex-wrap align-items-center justify-content-between mt-4">
                <h2 className='color-primary'>User Details</h2>

                <div className="d-flex flex-wrap">
                    <button className="user-action blacklist-user mb-sm-0 mb-3">
                        Blacklist User
                    </button>
                    <button className="user-action activate-user mb-sm-0 mb-3">
                        Activate User
                    </button>
                </div>
            </div>
            <div className="card user-card mt-5 p-4 pb-0">
                <div className="row">
                    <div className="col-xl-3 ">
                        <div className="d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center">
                            <img src={userResponse.profile.avatar} className='img-fluid me-2 rounded-circle' alt="" />
                            <div className="name">
                                <h4 className='color-primary'><b>{userResponse.profile.firstName} {userResponse.profile.lastName}</b></h4>
                                <p className='mb-0 color-sec text-uppercase'>{userResponse.orgName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 border-left-right d-flex align-items-center justify-content-center flex-column">
                        <p className='mb-0 color-sec fonts18'>{`User's Tier`}</p>
                        <div className="d-flex">
                            <img src="/images/icons/star.svg" className='img-fluid me-2' alt="" />
                            <img src="/images/icons/star2.svg" className='img-fluid me-2' alt="" />
                            <img src="/images/icons/star2.svg" className='img-fluid me-2' alt="" />
                        </div>
                    </div>
                    <div className="col-xl-5 ps-5 d-flex  justify-content-center flex-column text-xl-start text-center">
                        <h4 className='color-primary'><b>₦{userResponse.accountBalance}</b></h4>
                        <p className='mb-0 color-sec'>{userResponse.accountNumber}</p>
                    </div>

                    <div className="row pt-5 info-tab">
                        <div className="col-md-2 text-center"><p className='info-active'>General Details</p></div>
                        <div className="col-md-2 text-center"> <p>Document</p></div>
                        <div className="col-md-2 text-center"> <p>Bank Details</p></div>
                        <div className="col-md-2 text-center"> <p>Loans</p></div>
                        <div className="col-md-2 text-center"> <p>Savings</p></div>
                        <div className="col-md-2 text-center"> <p>App and System</p></div>
                    </div>

                </div>
            </div>
            <div className="card user-card  mt-3 p-4">
                <div className="info-card mb-4">
                    <p className='mb-0 color-primary fonts18'>Personal Information</p>
                    <div className="user-info">
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Full name</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.profile.firstName} {userResponse.profile.lastName}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Phone Number</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.profile.phoneNumber}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Email Address</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.email}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>BVN</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.profile.bvn}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Gender</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.profile.gender}</p>
                            </div>
                            <div className="col-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Marital Status</h6>
                                <p className='mb-0 color-sec fonts16'>No Data</p>
                            </div>
                            <div className="col-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Children</h6>
                                <p className='mb-0 color-sec fonts16'>No Data</p>
                            </div>
                            <div className="col-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Type of Residence</h6>
                                <p className='mb-0 color-sec fonts16'>No data</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-card mb-4">
                    <p className='mb-0 color-primary fonts18'>Education and Employment</p>
                    <div className="user-info">
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Level of Education</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.education.level}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Employment Status</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.education.employmentStatus}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Sector of Employment</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.education.sector}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Duration of Employment</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.education.duration}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Office Email</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.education.officeEmail}</p>
                            </div>
                            <div className="col-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Monthly Income</h6>
                                <p className='mb-0 color-sec fonts16'>₦{userResponse.education.monthlyIncome[0]} - ₦{userResponse.education.monthlyIncome[1]}</p>
                            </div>
                            <div className="col-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Loan Repayment</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.education.loanRepayment}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-card mb-4">
                    <p className='mb-0 color-primary fonts18'>Socials</p>
                    <div className="user-info">
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Twitter</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.socials.twitter}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Facebook</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.socials.facebook}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Instagram</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.socials.instagram}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="info-card mb-4">
                    <p className='mb-0 color-primary fonts18'>Guarantor</p>
                    <div className="user-info">
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Full name</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.guarantor.firstName} {userResponse.guarantor.lastName}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Phone Number</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.guarantor.phoneNumber}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Address</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.guarantor.address}</p>
                            </div>
                            <div className="col-md-2 mt-3">
                                <h6 className='color-sec text-uppercase fonts12'>Gender</h6>
                                <p className='mb-0 color-sec fonts16'>{userResponse.guarantor.gender}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> 
        </UserComponent> 
    )
};


SingleUser.getInitialProps = async(context:any) => {
    const {query} = context;
    
    try {
       
        const { data } = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${query.id}`)   

        return {
            userResponse: data
        }
    } catch(e) {
        console.log(e);
        return {
            userResponse: {}
        };
    }
}

export default SingleUser;