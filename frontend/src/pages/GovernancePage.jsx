import React, { useState } from "react";
import { Award } from "lucide-react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import { proposals } from "../data/mockData";
import "./GovernancePage.css";

const GovernancePage = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);

  return (
    <div className="governance-page">
      <div className="page-header">
        <h1 className="page-title">Governance & Voting</h1>
        <Button>Create Proposal</Button>
      </div>

      <div className="governance-stats">
        <Card>
          <p className="stat-label">Active Proposals</p>
          <p className="stat-value">12</p>
        </Card>
        <Card>
          <p className="stat-label">Your Voting Power</p>
          <p className="stat-value">2,450</p>
        </Card>
        <Card>
          <p className="stat-label">Participation Rate</p>
          <p className="stat-value">67%</p>
        </Card>
      </div>

      <div className="proposals-list">
        {proposals.map((proposal) => (
          <Card
            key={proposal.id}
            hover
            onClick={() => setSelectedProposal(proposal)}
          >
            <div className="proposal-header">
              <div className="proposal-info">
                <div className="proposal-title-row">
                  <h3 className="proposal-title">{proposal.title}</h3>
                  <span
                    className={`proposal-badge ${proposal.status.toLowerCase()}`}
                  >
                    {proposal.status}
                  </span>
                </div>
                <p className="proposal-applicant">
                  Proposed by {proposal.applicant}
                </p>
              </div>
              <div className="proposal-deadline">
                <p className="deadline-label">Ends in</p>
                <p className="deadline-value">{proposal.deadline}</p>
              </div>
            </div>

            <div className="proposal-votes">
              <div className="votes-info">
                <span className="votes-for">For: {proposal.votes.for}</span>
                <span className="votes-against">
                  Against: {proposal.votes.against}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      (proposal.votes.for /
                        (proposal.votes.for + proposal.votes.against)) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="proposal-footer">
              <div className="proposal-meta">
                <Award className="score-icon" />
                <span className="score-text">Score: {proposal.score}/100</span>
                {proposal.amount !== "N/A" && (
                  <>
                    <span className="meta-separator">•</span>
                    <span className="amount-label">Requesting:</span>
                    <span className="amount-value">{proposal.amount}</span>
                  </>
                )}
              </div>
              <Button>Vote Now</Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProposal}
        onClose={() => setSelectedProposal(null)}
        title={selectedProposal?.title || ""}
      >
        {selectedProposal && (
          <div className="proposal-modal">
            <div className="modal-meta">
              <p className="modal-applicant">
                Proposed by {selectedProposal.applicant}
              </p>
            </div>

            <div className="modal-details-box">
              <h3 className="modal-subtitle">Proposal Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Proposal ID</span>
                  <span className="detail-value">#{selectedProposal.id}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status</span>
                  <span className="detail-value">
                    {selectedProposal.status}
                  </span>
                </div>
                {selectedProposal.amount !== "N/A" && (
                  <div className="detail-item">
                    <span className="detail-label">Requested Amount</span>
                    <span className="detail-value">
                      {selectedProposal.amount}
                    </span>
                  </div>
                )}
                <div className="detail-item">
                  <span className="detail-label">Voting Ends</span>
                  <span className="detail-value">
                    {selectedProposal.deadline}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Quality Score</span>
                  <span className="detail-value">
                    {selectedProposal.score}/100
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-section">
              <h3 className="modal-subtitle">Voting Results</h3>
              <div className="voting-results">
                <div className="vote-bar-container">
                  <div className="vote-bar-header">
                    <span className="vote-label for">
                      For: {selectedProposal.votes.for} votes
                    </span>
                    <span className="vote-percentage">
                      {Math.round(
                        (selectedProposal.votes.for /
                          (selectedProposal.votes.for +
                            selectedProposal.votes.against)) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="vote-progress-bar">
                    <div
                      className="vote-progress-fill for"
                      style={{
                        width: `${
                          (selectedProposal.votes.for /
                            (selectedProposal.votes.for +
                              selectedProposal.votes.against)) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <div className="vote-bar-container">
                  <div className="vote-bar-header">
                    <span className="vote-label against">
                      Against: {selectedProposal.votes.against} votes
                    </span>
                    <span className="vote-percentage">
                      {Math.round(
                        (selectedProposal.votes.against /
                          (selectedProposal.votes.for +
                            selectedProposal.votes.against)) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="vote-progress-bar">
                    <div
                      className="vote-progress-fill against"
                      style={{
                        width: `${
                          (selectedProposal.votes.against /
                            (selectedProposal.votes.for +
                              selectedProposal.votes.against)) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-section">
              <h3 className="modal-subtitle">Score Breakdown</h3>
              <div className="score-breakdown">
                <div className="score-item">
                  <span className="score-label">Data Quality</span>
                  <div className="score-bar-wrapper">
                    <div className="score-bar">
                      <div
                        className="score-bar-fill"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="score-number">90</span>
                  </div>
                </div>
                <div className="score-item">
                  <span className="score-label">Community Need</span>
                  <div className="score-bar-wrapper">
                    <div className="score-bar">
                      <div
                        className="score-bar-fill"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="score-number">85</span>
                  </div>
                </div>
                <div className="score-item">
                  <span className="score-label">Maintainer Credibility</span>
                  <div className="score-bar-wrapper">
                    <div className="score-bar">
                      <div
                        className="score-bar-fill"
                        style={{ width: "88%" }}
                      />
                    </div>
                    <span className="score-number">88</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-voting">
              <h3 className="modal-subtitle">Cast Your Vote</h3>
              <div className="voting-buttons">
                <Button variant="success" className="vote-button">
                  Vote For
                </Button>
                <Button variant="danger" className="vote-button">
                  Vote Against
                </Button>
                <Button variant="secondary" className="vote-button-abstain">
                  Abstain
                </Button>
              </div>
              <p className="voting-power-text">
                Your voting power: 2,450 votes
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GovernancePage;
