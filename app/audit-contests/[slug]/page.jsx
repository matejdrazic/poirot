import audits from "../audits";

const AuditDetails = ({ params }) => {
    const audit = audits.active.find((audit) => audit.id === params.slug);
    console.log(audit);
    return (
        <>
            <div>
                <p>
                    lalal    
                </p>
            </div>
        </>
    );
}

export default AuditDetails;