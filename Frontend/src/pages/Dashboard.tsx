
import React from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import Topbar from '@/components/dashboard/Topbar';
import IPOStats from '@/components/dashboard/IPOStats';
import QuickLinks from '@/components/dashboard/QuickLinks';
import IPOChart from '@/components/dashboard/IPOChart';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <Topbar />
          <main className="flex-1 p-6 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* IPO Stats - Takes up 2 columns on large screens */}
              <div className="lg:col-span-2">
                <IPOStats />
              </div>
              
              {/* Right sidebar content */}
              <div className="space-y-6">
                <QuickLinks />
                <IPOChart />
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
