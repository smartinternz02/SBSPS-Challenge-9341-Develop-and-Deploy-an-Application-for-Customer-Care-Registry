import React, { Component } from 'react'
import { BiLaptop } from 'react-icons/bi'
import { IoIosPhonePortrait } from 'react-icons/io'
import { MdOutlineSecurity } from 'react-icons/md'
class Uniqueideas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            web: 'WebIcon',
            lap: 'LapIcon',
            App: 'LapIcon',
            cyber: 'CyberIcon'
        }
    }

    changeapp = () => {
        this.setState({
            App: 'changeAppIcon'
        })
    }
    changecyber = () => {
        this.setState({
            cyber: 'changeCyberIcon'
        })
    }
    changeweb = () => {
        this.setState({
            web: 'changeWebIcon'
        })
    }
    changelap = () => {
        this.setState({
            lap: 'changeLapIcon'
        })
    }

    unChange = () => {
        this.setState({
            web: 'WebIcon',
            lap: 'LapIcon',
            App: 'LapIcon',
            cyber: 'CyberIcon'
        })
    }

    render() {
        return (
            <div style={{ color: 'white' }} className='cont'>
                <div className="inno">
                    <h3>Why Choose Us</h3>
                    <h1>Take a quick tour</h1>
                    <br />
                    <p>
                        The best way is to learn about CustCare is to experinnce it like a customer.
                        See <br></br>for yourself how CustCare makes customer experience easy
                    </p>
                </div>
                <div className="blocks">
                    <div className="block1">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                               height="55"
                            fill="currentColor"
                            class="bi bi-alarm"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                            />
                            <path
                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                            />

                        </svg> */}
                        <BiLaptop className={this.state.lap} />
                        <h2>OnTime Deliver</h2>
                        <p>
                            To solve your complains on time <br></br>24/7, and see yourself good conversations become great experiences
                        </p>
                    </div>

                    <div className="block2">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                            height="55"
                            fill="currentColor"
                            class="bi bi-gear"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                            />
                            <path
                                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                            />
                        </svg> */}
                        <IoIosPhonePortrait className={this.state.App} />
                        <h2>Unique Services</h2>
                        <p>
                            The era of conversational CRM is here. Hear how our latest release
                            can connect customer conversation across your business
                        </p>
                    </div>
                    <div className="block3">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                            height="55"
                            fill="currentColor"
                            class="bi bi-intersect"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2h5z"
                            />
                        </svg> */}
                        <MdOutlineSecurity className={this.state.cyber} />
                        <h2>Worth Spending Money</h2>
                        <p>
                            Assess your company’s customer experience, find out how you stack
                            up against the leaders, and get a<br></br> personalized report.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Uniqueideas