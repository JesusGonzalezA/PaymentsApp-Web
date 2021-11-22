import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from '../components/screens/About'
import { Home } from '../components/screens/Home'
import { Profile } from '../components/screens/Profile'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="about" element={<About />}></Route>
                    <Route path="profile" element={<Profile />}></Route>

                    <Route path="/" element={<Home />}></Route> 
                </Routes>
            </div>
        </>
    )
}
