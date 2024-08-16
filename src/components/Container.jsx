
const Container = ({ children, className }) => (
    
    <div className={`w-full h-screen ${className}`}>
        <div className="common-layout">
            {children}
        </div>
    </div>
);


export default Container;