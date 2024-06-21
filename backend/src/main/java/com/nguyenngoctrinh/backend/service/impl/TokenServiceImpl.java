package com.nguyenngoctrinh.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyenngoctrinh.backend.entity.Token;
import com.nguyenngoctrinh.backend.service.TokenService;
import com.nguyenngoctrinh.backend.repository.TokenRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TokenServiceImpl implements TokenService {
    private TokenRepository tokenRepository;

    @Override
    public Token createToken(Token token) {
        return tokenRepository.save(token);
    }

    @Override
    public Token getTokenById(Long tokenId) {
        Optional<Token> optionalToken = tokenRepository.findById(tokenId);
        return optionalToken.get();
    }

    @Override
    public List<Token> getAllTokens() {
        return tokenRepository.findAll();
    }

    @Override
    public Token updateToken(Token token) {
        Token existingToken =tokenRepository.findById(token.getId()).get();
        existingToken.setCreated_at(token.getCreated_at());
        existingToken.setUser(token.getUser());
        
        Token updateToken = tokenRepository.save(existingToken);
        return updateToken;
    }

    @Override
    public void deleteToken(Long tokenId) {
        tokenRepository.deleteById(tokenId);
    }
}
