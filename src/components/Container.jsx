
const Container = ({ children, className }) => (
    
    <div className={` ${className}`}>
        <div className="common-layout">
            {children}
        </div>
    </div>
);


export default Container;