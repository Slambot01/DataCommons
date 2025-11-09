import React from "react";
import "./StatCard.css";

const StatCard = ({ label, value, icon: Icon, iconColor = "#3b82f6" }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-label">{label}</span>
        {Icon && (
          <Icon className="stat-card-icon" style={{ color: iconColor }} />
        )}
      </div>
      <div className="stat-card-value">{value}</div>
    </div>
  );
};

export default StatCard;
