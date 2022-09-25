import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Blank() {

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

                        {/* <!-- Page Heading --> */}

                        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Blank;