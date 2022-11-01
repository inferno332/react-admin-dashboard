import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
    Ecommerce,
    Orders,
    Employees,
    Customers,
    Kanban,
    Editor,
    Calendar,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorMapping,
    Pyramid,
    Stacked,
} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';
const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor,currentMode } = useStateContext();

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relavtive dark:bg-main-dark bg-light-gray">
                    <div className="fixed right-4 bottom-4 z-1000 ">
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{ background: currentColor, borderRadius: '50%' }}
                                onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>

                    {activeMenu ? (
                        <div className="sidebar w-72 fixed dark:bg-secondary-dark bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark">
                            <Sidebar />
                        </div>
                    )}

                    <div
                        className={`dark:bg-main-dark bg-main min-h-screen w-full ${
                            activeMenu ? ' md:ml-72' : 'flex-2'
                        }`}
                    >
                        <div className="fixed md:static bg-main dark:bg-main-dark navbar w-full">
                            <Navbar />
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                {/* DASHBOARD */}
                                <Route path="/" element={<Ecommerce />} />
                                <Route path="/ecommerce" element={<Ecommerce />} />

                                {/* PAGES */}
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/employees" element={<Employees />} />
                                <Route path="/customers" element={<Customers />} />

                                {/* APPS */}
                                <Route path="/kanban" element={<Kanban />} />
                                <Route path="/editor" element={<Editor />} />
                                <Route path="/calendar" element={<Calendar />} />

                                {/* CHARTS */}
                                <Route path="/line" element={<Line />} />
                                <Route path="/area" element={<Area />} />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/financial" element={<Financial />} />
                                <Route path="/color-mapping" element={<ColorMapping />} />
                                <Route path="/pyramid" element={<Pyramid />} />
                                <Route path="/stacked" element={<Stacked />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
