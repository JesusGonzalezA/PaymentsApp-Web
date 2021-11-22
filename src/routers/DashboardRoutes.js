import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from '../components/screens/About'
import { Home } from '../components/screens/Home'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="about" element={<About />}></Route>

                <Route path="/" element={<Home />}></Route> 
            </Routes>
        </>
    )
}
