import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Errorpage() {

    return (

        <div id="wrapper">

            {/* <!-- Sidebar --> */}

            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                
                <div id="content">

                    {/* <!-- Topbar --> */}

                    <Topbar />

                    <div className="container-fluid">

                        {/* <!-- 404 Error Text --> */}

                        <div className="text-center">
                            <div className="error mx-auto" data-text="404">404</div>
                            <p className="lead text-gray-800 mb-5">Page Not Found</p>
                            <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                            <a href="index.html">&larr; Back to Dashboard</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Errorpage;