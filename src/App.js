import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
const App = () => {
    const activeMenu = false;

    return (
        <div>
            <BrowserRouter>
                <div className="flex relavtive dark:bg-main-dark">
                    <div className="fixed right-4 bottom-4 z-1000 ">
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{ background: 'blue', borderRadius: '50%' }}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>

                    {activeMenu ? (
                        <div className="sidebar w-72 fixed dark:bg-secondary-dark bg-white">Sidebar</div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark">Sidebar</div>
                    )}

                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                            activeMenu ? ' md:ml-72' : 'flex-2'
                        }`}
                    >
                        <div className="fixed md:static bg-main dark:bg-main-dark navbar w-full">Navbar</div>
                    </div>

                    <div>
                      <Routes>
                            {/* DASHBOARD */}
                            <Route path="/" element={'Ecommerce'} />
                            <Route path="/ecommerce" element={'Ecommerce2'} />
                            {/* PAGES */}
                            <Route path="/orders" element={'Order'} />
                            <Route path="/employees" element={'Employee'} />
                      </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
