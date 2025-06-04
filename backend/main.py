from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import Dict
from app.api import document
from app.ai.models import ai_models

app = FastAPI(
    title="CivicLens API",
    description="AI-Powered Civic Policy Analyzer API",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize AI models
@app.on_event("startup")
async def startup_event():
    ai_models.initialize_models()

# Include routers
app.include_router(document.router, prefix="/api/documents", tags=["documents"])

@app.get("/")
async def root() -> Dict[str, str]:
    return {"message": "Welcome to CivicLens API"}

@app.get("/health")
async def health_check() -> JSONResponse:
    return JSONResponse(
        content={"status": "healthy"},
        status_code=200
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 