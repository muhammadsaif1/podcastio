import SidebarInner from "./SidebarInner";

const Sidebar = () => {
  return (
    <div className="sidebar-area p-6 rounded-4 border bc-n500 bgc-2 position-sticky sticky-lg-top sticky-top-position d-none d-xl-block">
      <SidebarInner />
    </div>
  );
};

export default Sidebar;
