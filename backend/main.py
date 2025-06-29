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
    allow_origins=["https://civiclens-gamma.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize AI models
@app.on_event("startup")
async def startup_event():
    ai_models.initialize_models()
    
@app.get("/")
async def root():
    return {"message": "CivicLens API is running", "status": "healthy"}

@app.exception_handler(404)
async def not_found_exception_handler(request, exc):
    return JSONResponse(
        status_code=404,
        content={"message": "Endpoint not found"},
    )

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
    import os

    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)