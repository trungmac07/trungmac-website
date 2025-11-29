export const achievementItem = ({ achievement, idx }: { achievement: any, idx: number }) => {

    return (
    <li key={idx} className="achievement-item">{achievement}</li>
    );
};