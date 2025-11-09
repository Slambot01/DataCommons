import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Database,
  Users,
  Zap,
  Shield,
  Coins,
  Vote,
  Check,
  Upload,
  Sparkles,
} from "lucide-react";
import useStore from "../store/useStore";
import { stats, recentActivity } from "../data/mockData";
import StatCard from "../components/common/StatCard";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import "./HomePage.css";

const HomePage = () => {
  const { setCurrentPage } = useStore();

  return (
    <div className="home-page">
      {/* Animated Background Elements */}
      <div className="background-video-container">
        <img
          src="/videos/vid.gif"
          alt="Background animation"
          className="background-gif"
        />
        <div className="background-overlay"></div>
      </div>
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Yield-Backed Open Data Infrastructure</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">The Future of</span>
          <span className="hero-title-line gradient-text">
            Open Data Funding
          </span>
          <span className="hero-title-line">Through DeFi Yields</span>
        </h1>

        <p className="hero-subtitle">
          DataCommons creates a self-sustaining funding loop for open data
          storage and accessibility. Deposit capital, generate continuous yield,
          and automatically fund the permanent storage of public datasets on
          decentralized networks.
        </p>

        <div className="hero-buttons">
          <Button
            onClick={() => setCurrentPage("deposit")}
            icon={ArrowRight}
            className="hero-button-primary"
          >
            Start Depositing
          </Button>
          <Button
            onClick={() => setCurrentPage("apply")}
            variant="outline"
            className="hero-button-secondary"
          >
            Apply for Funding
          </Button>
        </div>

        {/* Trusted By Section */}
        <div className="trusted-by">
          <p className="trusted-label">Powering Open Data Preservation</p>
          <div className="trusted-logos">
            <div className="trusted-logo">Arweave</div>
            <div className="trusted-logo">Filecoin</div>
            <div className="trusted-logo">Aave V3</div>
            <div className="trusted-logo">IPFS</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          label="Total Value Locked"
          value={stats.tvl}
          icon={TrendingUp}
          iconColor="#d3d1d5ff"
        />
        <StatCard
          label="Current APY"
          value={stats.yieldRate}
          icon={Zap}
          iconColor="#d3d1d5ff"
        />
        <StatCard
          label="Datasets Funded"
          value={stats.datasetsFunded}
          icon={Database}
          iconColor="#d3d1d5ff"
        />
        <StatCard
          label="Storage Preserved"
          value={stats.storagePreserved}
          icon={Shield}
          iconColor="#d3d1d5ff"
        />
        <StatCard
          label="Active Depositors"
          value={stats.activeDepositors}
          icon={Users}
          iconColor="#d3d1d5ff"
        />
      </div>

      {/* How It Works */}
      <Card className="how-it-works-card">
        <div className="section-header">
          <h2 className="section-title">How DataCommons Works</h2>
          <p className="section-subtitle">
            A perpetual funding engine for open data preservation
          </p>
        </div>

        <div className="how-it-works-grid">
          <div className="how-it-works-item">
            <div className="step-number">01</div>
            <div className="how-it-works-icon-wrapper blue">
              <div className="icon-glow blue"></div>
              <Coins className="how-it-works-icon" size={32} />
            </div>
            <h3 className="how-it-works-title">Deposit Stablecoins</h3>
            <p className="how-it-works-desc">
              Deposit USDC or DAI into the funding vault. Your principal remains
              safe and fully withdrawable at any time. No lock-up periods.
            </p>
          </div>

          <div className="how-it-works-item">
            <div className="step-number">02</div>
            <div className="how-it-works-icon-wrapper green">
              <div className="icon-glow green"></div>
              <TrendingUp className="how-it-works-icon" size={32} />
            </div>
            <h3 className="how-it-works-title">Generate Continuous Yield</h3>
            <p className="how-it-works-desc">
              Deposits are invested in Aave v3 to earn yield. The protocol
              automatically harvests yields to fund open data initiatives.
            </p>
          </div>

          <div className="how-it-works-item">
            <div className="step-number">03</div>
            <div className="how-it-works-icon-wrapper purple">
              <div className="icon-glow purple"></div>
              <Vote className="how-it-works-icon" size={32} />
            </div>
            <h3 className="how-it-works-title">DAO Governance</h3>
            <p className="how-it-works-desc">
              Community votes democratically on which datasets and institutions
              receive funding through transparent on-chain governance.
            </p>
          </div>

          <div className="how-it-works-item">
            <div className="step-number">04</div>
            <div className="how-it-works-icon-wrapper orange">
              <div className="icon-glow orange"></div>
              <Database className="how-it-works-icon" size={32} />
            </div>
            <h3 className="how-it-works-title">Permanent Storage</h3>
            <p className="how-it-works-desc">
              Yield automatically pays for permanent, decentralized storage on
              Arweave, Filecoin, and IPFS. Data is preserved forever.
            </p>
          </div>
        </div>
      </Card>

      {/* Value Proposition Section */}
      <div className="value-props-grid">
        <Card className="value-prop-card">
          <div className="value-prop-icon">
            <Shield size={32} />
          </div>
          <h3 className="value-prop-title">Sustainable Funding</h3>
          <p className="value-prop-desc">
            Unlike one-time grants that expire, yield creates perpetual support.
            The funding never stops, even if new deposits cease.
          </p>
        </Card>

        <Card className="value-prop-card">
          <div className="value-prop-icon">
            <Database size={32} />
          </div>
          <h3 className="value-prop-title">Complete Transparency</h3>
          <p className="value-prop-desc">
            Every payment and policy change is recorded on-chain. Anyone can
            verify how yield is generated and exactly how it's spent.
          </p>
        </Card>

        <Card className="value-prop-card">
          <div className="value-prop-icon">
            <Users size={32} />
          </div>
          <h3 className="value-prop-title">Decentralized Control</h3>
          <p className="value-prop-desc">
            Community-governed smart contracts manage all funding decisions. No
            centralized foundation or single point of failure.
          </p>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="activity-card">
        <div className="section-header">
          <h2 className="section-title">Recent Activity</h2>
          <p className="section-subtitle">
            Live protocol updates and transactions
          </p>
        </div>

        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-info">
                <div className={`activity-icon-wrapper ${activity.type}`}>
                  {activity.type === "funding" && <Check size={20} />}
                  {activity.type === "deposit" && <Upload size={20} />}
                  {activity.type === "proposal" && <Vote size={20} />}
                </div>
                <div className="activity-content">
                  <p className="activity-title">{activity.title}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
              <span className={`activity-value ${activity.type}`}>
                {activity.amount || activity.address || activity.proposalId}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Stats Highlight Section */}
      <div className="stats-highlight">
        <div className="stats-highlight-content">
          <div className="stats-highlight-item">
            <h3 className="stats-highlight-number">$1M+</h3>
            <p className="stats-highlight-label">Total Yield Generated</p>
          </div>
          <div className="stats-highlight-divider"></div>
          <div className="stats-highlight-item">
            <h3 className="stats-highlight-number">2.4 TB</h3>
            <p className="stats-highlight-label">Data Preserved Forever</p>
          </div>
          <div className="stats-highlight-divider"></div>
          <div className="stats-highlight-item">
            <h3 className="stats-highlight-number">328</h3>
            <p className="stats-highlight-label">Active Contributors</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Preserve Knowledge Forever?</h2>
          <p className="cta-description">
            Join DataCommons and help create a self-sustaining ecosystem for
            open data. Your deposits earn yield while funding the preservation
            of humanity's shared knowledge.
          </p>
          <div className="cta-buttons">
            <Button onClick={() => setCurrentPage("deposit")} icon={ArrowRight}>
              Start Depositing Now
            </Button>
            <Button
              onClick={() => setCurrentPage("governance")}
              variant="outline"
            >
              Join Governance
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
