const DashboardLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
    return (
        <div className='h-full relative'>
            <div className="hidden h-full md:flex md:flex-col md:fixed md:insert-y-0 z-[80] bd-gray-900">
                <div>
                    Hello SideBar
                </div>
            </div>
        </div>
    )
}
