import type { Certification, CertificationCardProps, TechnicalCertification } from '../../../types/types';


const isTechnicalCertification = (cert: Certification): cert is TechnicalCertification => {
  return cert.certType === 'technical';
};

// const isLanguageCertification = (cert: Certification): cert is LanguageCertification => {
//   return cert.certType === 'language';
// };

export const CertificationCard = ({ cert }: CertificationCardProps) => {
  if (isTechnicalCertification(cert)) {
    return (
      <div className="tech-cert-card">
        <h4 className="text-subheading">{cert.name}</h4>
        <p className="text-secondary">{cert.issuer}</p>
        <div className="tech-cert-details">
          <div className="text-tertiary">Issued: {cert.date}</div>
          <div className="text-tertiary">Expires: {cert.validUntil}</div>
          <div className="text-tertiary">ID: {cert.credentialId}</div>
          {cert.credentialUrl && (
            <div className="text-tertiary">
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="credential-link">
                View Credential
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="certification-card">
      <div className="cert-header">
        <h4 className="text-subheading">{cert.name}</h4>
        <div className="text-badge">{cert.score}</div>
      </div>
      
      <div className="cert-details">
        <div className="cert-dates">
          <span className="text-secondary">Taken: {cert.date}</span>
          <span className="text-secondary">Valid until: {cert.validUntil}</span>
        </div>
        
        {cert.breakdown && (
          <div className="score-breakdown">
            <h6 className="text-label">Score Breakdown</h6>
            <div className="breakdown-grid">
              {Object.entries(cert.breakdown).map(([skill, score]) => (
                <div key={`${skill}-${score}`} className="breakdown-item">
                  <span className="text-accent">{skill}:</span>
                  <span className="text-accent">{score}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
