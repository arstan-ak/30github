"use client";
import {ReactNode} from 'react'
import { useConvexAuth } from 'convex/react';

const MainLayout = (children:ReactNode) => {

const {isAuthenticated, isLoading} = useConvexAuth();
    return 
}

export default MainLayout