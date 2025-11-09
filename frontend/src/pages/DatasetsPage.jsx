import React, { useState } from "react";
import { Filter, Download, ExternalLink } from "lucide-react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import { datasets } from "../data/mockData";
import "./DatasetsPage.css";

const DatasetsPage = () => {
  const [selectedDataset, setSelectedDataset] = useState(null);

  return (
    <div className="datasets-page">
      <div className="page-header">
        <h1 className="page-title">Dataset Explorer</h1>
        <Button icon={Filter} variant="secondary">
          Filters
        </Button>
      </div>

      <div className="datasets-grid">
        {datasets.map((dataset) => (
          <Card
            key={dataset.id}
            hover
            onClick={() => setSelectedDataset(dataset)}
          >
            <div className="dataset-card-header">
              <div className="dataset-info">
                <h3 className="dataset-name">{dataset.name}</h3>
                <span className="dataset-badge">{dataset.category}</span>
              </div>
              <div
                className={`dataset-status ${dataset.status.toLowerCase()}`}
              />
            </div>

            <div className="dataset-details">
              <div className="dataset-detail-row">
                <span className="detail-label">Size</span>
                <span className="detail-value">{dataset.size}</span>
              </div>
              <div className="dataset-detail-row">
                <span className="detail-label">Funded</span>
                <span className="detail-value green">{dataset.funded}</span>
              </div>
              <div className="dataset-detail-row">
                <span className="detail-label">Storage</span>
                <span className="detail-value">{dataset.storage}</span>
              </div>
            </div>

            <div className="dataset-maintainer">
              <p className="maintainer-label">Maintained by</p>
              <p className="maintainer-name">{dataset.maintainer}</p>
            </div>

            <div className="dataset-actions">
              <Button className="action-btn-primary">View Details</Button>
              <button className="action-btn-icon">
                <Download size={20} />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={!!selectedDataset}
        onClose={() => setSelectedDataset(null)}
        title={selectedDataset?.name || ""}
      >
        {selectedDataset && (
          <div className="dataset-modal">
            <div className="modal-section">
              <h3 className="modal-section-title">Dataset Information</h3>
              <div className="modal-info-grid">
                <div className="modal-info-item">
                  <p className="modal-info-label">Category</p>
                  <p className="modal-info-value">{selectedDataset.category}</p>
                </div>
                <div className="modal-info-item">
                  <p className="modal-info-label">Size</p>
                  <p className="modal-info-value">{selectedDataset.size}</p>
                </div>
                <div className="modal-info-item">
                  <p className="modal-info-label">Funding Amount</p>
                  <p className="modal-info-value green">
                    {selectedDataset.funded}
                  </p>
                </div>
                <div className="modal-info-item">
                  <p className="modal-info-label">Storage Provider</p>
                  <p className="modal-info-value">{selectedDataset.storage}</p>
                </div>
              </div>
            </div>

            <div className="storage-proof">
              <h3 className="modal-section-title">Storage Proof</h3>
              <div className="proof-details">
                <div className="proof-row">
                  <span>Transaction Hash</span>
                  <a href="#" className="proof-link">
                    0x7a2f...3d8c
                  </a>
                </div>
                <div className="proof-row">
                  <span>Deal ID</span>
                  <span className="proof-code">AR-2847592</span>
                </div>
                <div className="proof-row">
                  <span>Verified</span>
                  <span className="proof-verified">✓ Yes</span>
                </div>
              </div>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Maintainer</h3>
              <p>{selectedDataset.maintainer}</p>
            </div>

            <div className="modal-actions">
              <Button icon={Download} className="modal-action-btn">
                Download Dataset
              </Button>
              <button className="modal-action-icon">
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DatasetsPage;
