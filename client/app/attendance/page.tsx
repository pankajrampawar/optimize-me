'use client'

import DetailsCard from "../ui/attendance/detailsCard"
import OverviewChip from "../ui/attendance/overviewChip"

export default function attendance() {
    return (
        <main className="flex flex-col gap-6">
            <div className="text-4xl font-semibold text-navGreen pl-4">
                Attendance
            </div>

            <div className="h-[600px] w-[880px] bg-attendanceCard rounded-2xl flex">
                <div className="flex w-1/2">
                    <DetailsCard/>
                </div>
                
                <div className="flex flex-col items-center mt-10 w-1/2 p-4 gap-6">
                    <div className="text-2xl font-extralight text-white">
                        Subjects
                    </div>

                    <div>
                        <OverviewChip/>
                    </div>

                    <div>
                        <OverviewChip/>
                    </div>

                    <div>
                        <OverviewChip/>
                    </div>

                    <div>
                        <OverviewChip/>
                    </div>

                    <div>
                        <OverviewChip/>
                    </div>
                </div>
            </div>
        </main>
    )
}