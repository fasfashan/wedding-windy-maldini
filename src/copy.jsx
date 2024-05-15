import React from "react";

class CopyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard() {
    const { textToCopy } = this.props;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        this.setState({ copied: true });
        setTimeout(() => {
          this.setState({ copied: false });
        }, 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  }

  render() {
    const { textToCopy } = this.props;
    const { copied } = this.state;
    return (
      <button
        className="px-4 py-2 w-fit flex items-center gap-2 justify-center border border-gray-200 rounded-lg bg-white"
        onClick={this.copyToClipboard}
      >
        {copied ? "Berhasil dicopy!" : "Copy nomor rekening"}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
}

export default CopyButton;
